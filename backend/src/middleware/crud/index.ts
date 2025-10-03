import { Request } from 'express';
import { z } from 'zod';

export interface SecurityConfig {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export interface ValidationResult {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

export class CrudController {
  private securityConfig: SecurityConfig[];

  constructor(securityConfig: SecurityConfig[]) {
    this.securityConfig = securityConfig;
  }

  async create(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'CREATE');
  }

  async read(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'READ');
  }

  async update(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'UPDATE');
  }

  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'DELETE');
  }

  private async validateRequest(
    req: Request,
    schema: z.ZodSchema,
    permission: string
  ): Promise<[ValidationResult | null, any]> {
    try {
      const paramsData = { ...req.params, ...req.query, ...req.body };
      const validatedParams = await schema.parseAsync(paramsData);

      const credential = {
        idAccount: 1,
        idUser: 1,
      };

      return [
        {
          credential,
          params: validatedParams,
        },
        null,
      ];
    } catch (error: any) {
      return [
        null,
        {
          statusCode: 400,
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: error.errors,
        },
      ];
    }
  }
}

export const successResponse = (data: any) => {
  return {
    success: true,
    data: data,
    metadata: {
      timestamp: new Date().toISOString(),
    },
  };
};
