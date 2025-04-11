export const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'E-Commerce API',
        version: '1.0.0',
        description: 'API documentation for the e-commerce backend built with Node.js, Express, TypeScript, and PostgreSQL'
      },
      servers: [
        {
          url: 'http://localhost:3000/',
          description: 'Local server'
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
        schemas: {
          Product: {
            type: 'object',
            properties: {
              id: { type: 'integer', example: 1 },
              name: { type: 'string', example: 'iPhone 15' },
              description: { type: 'string', example: 'Latest Apple smartphone' },
              price: { type: 'number', format: 'float', example: 1099.99 },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' }
            }
          },
          ProductInput: {
            type: 'object',
            required: ['name', 'description', 'price'],
            properties: {
              name: { type: 'string', example: 'iPhone 15' },
              description: { type: 'string', example: 'Latest Apple smartphone' },
              price: { type: 'number', format: 'float', example: 1099.99 }
            }
          }
        },
      },
      security: [{ bearerAuth: [] }],
    },
    apis: ['./src/routes/**/*.ts', './src/controllers/**/*.ts', './src/models/**/*.ts'],
  };