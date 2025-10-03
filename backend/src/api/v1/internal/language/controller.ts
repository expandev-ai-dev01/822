import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { CrudController, successResponse } from '@/middleware/crud';
import { errorResponse, StatusGeneralError } from '@/middleware/error';
import { languageList, codeGenerate } from '@/services/language';

const securable = 'LANGUAGE';

/**
 * @api {get} /internal/language List Languages
 * @apiName ListLanguages
 * @apiGroup Language
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves the list of available programming languages
 *
 * @apiSuccess {Array} data Array of language objects
 * @apiSuccess {String} data.id Language identifier
 * @apiSuccess {String} data.name Language display name
 * @apiSuccess {String} data.extension File extension
 * @apiSuccess {String} data.identifier Syntax highlighting identifier
 *
 * @apiError {String} ServerError Internal server error
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const operation = new CrudController([{ securable, permission: 'READ' }]);

  const paramsSchema = z.object({});

  const [validated, error] = await operation.read(req, paramsSchema);

  if (!validated) {
    return next(error);
  }

  try {
    const data = await languageList({
      ...validated.credential,
    });

    res.json(successResponse(data));
  } catch (error: any) {
    if (error.message === 'failedToLoadLanguages') {
      res.status(500).json(errorResponse(error.message));
    } else {
      next(StatusGeneralError);
    }
  }
}

/**
 * @api {post} /internal/language/generate Generate Code
 * @apiName GenerateCode
 * @apiGroup Language
 * @apiVersion 1.0.0
 *
 * @apiDescription Generates Hello World code for selected language
 *
 * @apiParam {String} selectedLanguage Language identifier
 *
 * @apiSuccess {String} code Generated code content
 * @apiSuccess {String} language Language display name
 * @apiSuccess {String} languageIdentifier Syntax highlighting identifier
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} languageNotSupported Language not in supported list
 * @apiError {String} templateNotFound Template file not found
 */
export async function generateHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const operation = new CrudController([{ securable, permission: 'CREATE' }]);

  const bodySchema = z.object({
    selectedLanguage: z.string().min(1, 'selectedLanguageRequired'),
  });

  const [validated, error] = await operation.create(req, bodySchema);

  if (!validated) {
    return next(error);
  }

  /**
   * @validation Ensure selectedLanguage is provided
   * @throw {Error}
   */
  if (!validated.params.selectedLanguage) {
    res.status(400).json(errorResponse('selectedLanguageRequired'));
    return;
  }

  try {
    const data = await codeGenerate({
      ...validated.credential,
      selectedLanguage: validated.params.selectedLanguage,
    });

    res.json(successResponse(data));
  } catch (error: any) {
    if (error.message === 'languageNotSupported') {
      res.status(400).json(errorResponse(error.message));
    } else if (error.message === 'templateNotFound') {
      res.status(404).json(errorResponse(error.message));
    } else {
      next(StatusGeneralError);
    }
  }
}
