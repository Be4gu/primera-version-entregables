export const pruebaJs = {
  info: {
    title: 'IberinformApis',
    version: '1.0.0',
    'x-ibm-name': 'iberinformapis',
    contact: {
      url: 'https://www.iberinform.es/',
      name: 'Iberinform',
      email: 'api.support@iberinform.es'
    },
    license: {
      name: 'APIs Iberinform YAML',
      url: '../00 - Yaml/APIs_Iberinform.yaml'
    }
  },
  paths: {
    '/tendersapi/awarder/{country}/tenders': {
      parameters: [
        { required: true, type: 'string', name: 'country', in: 'path' },
        { required: true, type: 'string', name: 'name', in: 'query' },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/modules/trademarksEO/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/TradeDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/modules/consolidatedFinancialAccounts/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/CFADetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/incidents/{organisationID}/defendant/claims': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/DefClaimsDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/tendersapi/tenders/awards/{id}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/organismSearchDetails' }
          },
          404: {
            description: '404 Not found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Authentication failed',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 An internal error has occurred',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'id',
            in: 'path',
            name: 'id'
          },
          {
            in: 'query',
            description: 'offset',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'offset'
          },
          {
            in: 'query',
            description: 'limit',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'limit'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/awarder/{country}': {
      parameters: [
        { required: true, type: 'string', name: 'country', in: 'path' },
        { required: true, type: 'string', name: 'name', in: 'query' },
        {
          required: false,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/modules/ordinaryFinancialConnections/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: {
              $ref: '#/definitions/ordinaryFinancialConnectionDetail'
            }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/additionalFinancialData/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/AFDDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/banks/{organisationID}': {
      get: {
        responses: {
          200: { description: '200 OK' },
          404: { description: 'Recurso no encontrado' },
          403: { description: 'Forbidden' },
          401: { description: 'Unauthorized' },
          500: { description: 'Internal error' }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/incidents/{organisationID}/defendant/claims/{incidentID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/DefClaimsIDDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          },
          {
            required: true,
            type: 'string',
            name: 'incidentID',
            in: 'path'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/modules/asnefdata/{nif}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/asnefDetails' }
          },
          404: {
            description: '404 Not Found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Unauthorized',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'nif',
            in: 'path',
            name: 'nif'
          },
          {
            required: false,
            type: 'string',
            description: 'lang',
            in: 'query',
            name: 'lang'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/alertsapi/alertTypes/{typeId}/payload': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/alertsTypePayloadDetails' }
          },
          404: {
            description: '404 Not found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Authentication failed',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        parameters: [
          {
            in: 'path',
            description: 'typeId',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'typeId'
          }
        ],
        tags: ['Alerts']
      }
    },
    '/modules/consolidatedFinancialRatios/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: {
              $ref: '#/definitions/consolidatedFinancialRatiosDetail'
            }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/tendersapi/v2/tenders': {
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/modules/activityIncidents/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/activityIncidentDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/modules/consolidatedCashFlows/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/CCFDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/tendersapi/identifierType/{country}': {
      get: {
        responses: { 200: { description: '200 OK' } },
        parameters: [
          {
            required: true,
            type: 'string',
            name: 'country',
            in: 'path'
          },
          {
            required: false,
            type: 'integer',
            name: 'offset',
            in: 'query',
            format: 'int32'
          },
          {
            required: false,
            type: 'integer',
            name: 'limit',
            in: 'query',
            format: 'int32'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/modules/providers/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/ProDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/ordinaryFinancialAccounts/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/OFADetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/incidents/{organisationID}/affectedAsPlaintiff/legalProceedings':
      {
        get: {
          responses: {
            200: {
              description: '200 OK',
              schema: { $ref: '#/definitions/LeProcDetail' }
            },
            404: {
              description: 'Recurso no encontrado',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            403: {
              description: 'Forbidden',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            401: {
              description: 'Unauthorized',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            500: {
              description: 'Internal error',
              schema: { $ref: '#/definitions/ErrorDetail' }
            }
          },
          parameters: [
            {
              required: true,
              type: 'string',
              description: 'identificador de la firma',
              in: 'path',
              name: 'organisationID'
            },
            {
              required: false,
              type: 'string',
              description: 'Idioma generaci\u00f3n',
              in: 'query',
              name: 'language'
            }
          ],
          tags: ['Incidents']
        }
      },
    '/tendersapi/cpvs/{cpvID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/cpvDetails' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'string' }
          },
          400: {
            description: '400 Cpv Not Found',
            schema: { type: 'string' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'cpvID',
            in: 'path',
            name: 'cpvID'
          },
          {
            required: false,
            type: 'string',
            description: 'lang',
            in: 'query',
            name: 'lang'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/cpvs': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/cpvsDetails' }
          },
          500: { description: '500 Internal Server Error' }
        },
        parameters: [
          {
            in: 'query',
            description: 'offset',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'offset'
          },
          {
            in: 'query',
            description: 'limit',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'limit'
          },
          {
            required: false,
            type: 'string',
            description: 'lang',
            in: 'query',
            name: 'lang'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/modules/ordinaryCashFlows/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/OCFDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/alertsapi/alerts': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/alertsDetails' }
          },
          404: {
            description: '404 Not Found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbiden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Authentication failed',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        parameters: [
          {
            in: 'query',
            description: 'limit',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'limit'
          }
        ],
        tags: ['Alerts']
      },
      delete: {
        responses: { 200: { description: '200 OK' } },
        parameters: [
          {
            required: false,
            type: 'string',
            description: 'alertId',
            in: 'query',
            name: 'alertId'
          }
        ],
        tags: ['Alerts']
      }
    },
    '/tendersapi/subscriptions/users/{userID}/alerts/{alertId}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/subscriptionDetails' }
          },
          404: {
            description: '400 Invalid Parameters Supplied',
            schema: { type: 'string' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'string' }
          },
          400: {
            description: '400 Invalid Parameters Supplied',
            schema: { type: 'string' }
          }
        },
        parameters: [
          {
            in: 'path',
            description: 'userID',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'userID'
          },
          {
            in: 'path',
            description: 'alertId',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'alertId'
          }
        ],
        tags: ['Tenders']
      },
      delete: {
        responses: { 200: { description: '200 OK' } },
        parameters: [
          {
            in: 'path',
            description: 'userID',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'userID'
          },
          {
            in: 'path',
            description: 'alertId',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'alertId'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/awardee/{country}/{identifierType}/{identifier}/tenders': {
      parameters: [
        {
          required: true,
          type: 'string',
          name: 'country',
          in: 'path'
        },
        {
          required: true,
          type: 'string',
          name: 'identifierType',
          in: 'path'
        },
        {
          required: true,
          type: 'string',
          name: 'identifier',
          in: 'path'
        },
        {
          required: false,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/tendersapi/subscriptions/users/{userID}/alerts': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/subscriptionsDetails' }
          },
          404: {
            description: '404 Subscription Not Found',
            schema: { type: 'string' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'string' }
          },
          400: {
            description: '400 Invalid Parameters Supplied',
            schema: { type: 'string' }
          }
        },
        parameters: [
          {
            in: 'path',
            description: 'userID',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'userID'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/modules/resume/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/ResDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Identification']
      }
    },
    '/tendersapi/v2/tenders/{id}/twins': {
      parameters: [{ required: true, type: 'string', name: 'id', in: 'path' }],
      get: {
        responses: { 200: { description: '200 OK' } },
        parameters: [
          { required: true, type: 'string', name: 'id', in: 'path' },
          {
            required: false,
            type: 'integer',
            name: 'offset',
            in: 'query',
            format: 'int32'
          },
          {
            required: false,
            type: 'boolean',
            name: 'CPV',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'Organism',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'Title',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'Description',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'ContractType',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'Country',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'TenderSource',
            in: 'query'
          },
          {
            required: false,
            type: 'boolean',
            name: 'TenderStatus',
            in: 'query'
          },
          {
            required: false,
            type: 'integer',
            name: 'limit',
            in: 'query',
            format: 'int32'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/awarder/{country}/{identifierType}/{identifier}': {
      parameters: [
        { required: true, type: 'string', name: 'country', in: 'path' },
        {
          required: true,
          type: 'string',
          name: 'identifierType',
          in: 'path'
        },
        {
          required: true,
          type: 'string',
          name: 'identifier',
          in: 'path'
        },
        {
          required: false,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/tendersapi/awarder/{country}/{identifierType}/{identifier}/tenders': {
      parameters: [
        {
          required: true,
          type: 'string',
          name: 'country',
          in: 'path'
        },
        {
          required: true,
          type: 'string',
          name: 'identifierType',
          in: 'path'
        },
        {
          required: true,
          type: 'string',
          name: 'identifier',
          in: 'path'
        },
        {
          required: false,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/modules/deedsPublishedInBormeEO/{organisationID}': {
      parameters: [
        {
          required: true,
          type: 'string',
          description: 'identificador de la firma',
          in: 'path',
          name: 'organisationID'
        },
        {
          required: false,
          type: 'string',
          description: 'Idioma generaci\u00f3n',
          in: 'query',
          name: 'language'
        }
      ],
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/DPIBEODetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        tags: ['Trading Data']
      }
    },
    '/modules/sales/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/SalDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/notesConsolidatedAccounts/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/NTAADetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/delinquencyFiles/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/DFDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/tendersapi/awardee/{country}/tenders': {
      parameters: [
        { required: true, type: 'string', name: 'country', in: 'path' },
        { required: true, type: 'string', name: 'name', in: 'query' },
        {
          required: false,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/tendersapi/countries': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/countryDetails' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'string' }
          }
        },
        parameters: [
          {
            in: 'query',
            description: 'offset',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'offset'
          },
          {
            in: 'query',
            description: 'limit',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'limit'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/modules/iberPlusReportEO/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/iberDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Product Reports']
      }
    },
    '/modules/identificationDetails/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/IdenDDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Identification']
      }
    },
    '/modules/riskControlElements/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/RCEDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/incidents/{organisationID}/defendant/legalProceedings': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/DefLegProcDetails' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/DefLegProcDetails' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/DefLegProcDetails' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/DefLegProcDetails' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/tendersapi/countries/{countryID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/countryDetails' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'string' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'countryID',
            in: 'path',
            name: 'countryID'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/subscriptions/alerts': {
      post: {
        responses: {
          201: { description: '' },
          200: {
            description: '200 OK',
            schema: { type: 'integer', format: 'int32' }
          },
          500: { description: '500 Internal Server Error' }
        },
        parameters: [
          {
            required: false,
            in: 'body',
            description: 'alert',
            name: 'alert',
            schema: { $ref: '#/definitions/bodyPostDetails' }
          }
        ],
        tags: ['Tenders']
      },
      get: {
        deprecated: false,
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/subscriptionsAlertDetails' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'object' }
          }
        },
        tags: ['Tenders']
      }
    },
    '/modules/ordinaryEquityChanges/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/OECDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/incidents/{organisationID}/affectedAsPlaintiff/legalProceedings/{incidentID}':
      {
        get: {
          responses: {
            200: {
              description: '200 OK',
              schema: { $ref: '#/definitions/LeProcIDDetail' }
            },
            404: {
              description: 'Recurso no encontrado',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            403: {
              description: 'Forbidden',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            401: {
              description: 'Unauthorized',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            500: {
              description: 'Internal error',
              schema: { $ref: '#/definitions/ErrorDetail' }
            }
          },
          parameters: [
            {
              required: true,
              type: 'string',
              name: 'organisationID',
              in: 'path'
            },
            {
              required: true,
              type: 'string',
              name: 'incidentID',
              in: 'path'
            },
            {
              required: false,
              type: 'string',
              name: 'language',
              in: 'query'
            }
          ],
          tags: ['Incidents']
        }
      },
    '/alertsapi/alertTypes/{typeId}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/alertsTypeDetails' }
          },
          404: {
            description: '404 Not found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Authentication failed',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 An internal error has occurred',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        parameters: [
          {
            in: 'path',
            description: 'typeId',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'typeId'
          }
        ],
        tags: ['Alerts']
      }
    },
    '/modules/customers/{organisationID}': {
      get: {
        responses: {
          200: { description: '200 OK' },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/consolidatedBalanceSheetAndIncomeStatement/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/CBSAISDetails' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/tendersapi/subscriptions/users/{userID}/alerts/{alertId}/events': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/alertDetails' }
          },
          404: {
            description: '404 Subscription Not Found',
            schema: { type: 'string' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { type: 'string' }
          },
          400: {
            description: '400 Invalid parameters supplied',
            schema: { type: 'string' }
          }
        },
        parameters: [
          {
            in: 'path',
            description: 'userID',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'userID'
          },
          {
            in: 'path',
            description: 'alertId',
            format: 'int32',
            required: true,
            type: 'integer',
            name: 'alertId'
          },
          {
            required: false,
            type: 'string',
            description: 'date',
            in: 'query',
            name: 'date'
          },
          {
            required: false,
            type: 'boolean',
            description: 'queried',
            in: 'query',
            name: 'queried'
          },
          {
            in: 'query',
            description: 'offset',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'offset'
          },
          {
            in: 'query',
            description: 'limit',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'limit'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/v2/tenders/{id}': {
      parameters: [{ required: true, type: 'string', name: 'id', in: 'path' }],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/modules/incidents/{organisationID}/defendant/bankruptcyProceedings': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: {
              $ref: '#/definitions/defenbankruptcyProceedingsDetail'
            }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Incidents']
      }
    },
    '/modules/incidents/{organisationID}/defendant/legalProceedings/{incidentID}':
      {
        get: {
          responses: {
            200: {
              description: '200 OK',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            404: {
              description: 'Recurso no encontrado',
              schema: { $ref: '#/definitions/DefLegProcIDDetails' }
            },
            403: {
              description: 'Forbidden',
              schema: { $ref: '#/definitions/DefLegProcIDDetails' }
            },
            401: {
              description: 'Unauthorized',
              schema: { $ref: '#/definitions/DefLegProcIDDetails' }
            },
            500: {
              description: 'Internal error',
              schema: { $ref: '#/definitions/DefLegProcIDDetails' }
            }
          },
          parameters: [
            {
              required: true,
              type: 'string',
              description: 'identificador de la firma',
              in: 'path',
              name: 'organisationID'
            },
            {
              required: false,
              type: 'string',
              description: 'Idioma generaci\u00f3n',
              in: 'query',
              name: 'language'
            },
            {
              required: true,
              type: 'string',
              name: 'incidentID',
              in: 'path'
            }
          ],
          tags: ['Incidents']
        }
      },
    '/modules/consolidatedEquityChanges/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/CECDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/notesOrdinaryAccounts/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/NTAADetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/facilities/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/FaciliDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/incidents/{organisationID}/affectedAsPlaintiff/bankruptcyProceedings':
      {
        get: {
          responses: {
            200: {
              description: '200 OK',
              schema: { $ref: '#/definitions/bankruptcyDetail' }
            },
            404: {
              description: 'Recurso no encontrado',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            403: {
              description: 'Forbidden',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            401: {
              description: 'Unauthorized',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            500: {
              description: 'Internal error',
              schema: { $ref: '#/definitions/ErrorDetail' }
            }
          },
          parameters: [
            {
              required: true,
              type: 'string',
              description: 'identificador de la firma',
              in: 'path',
              name: 'organisationID'
            },
            {
              required: false,
              type: 'string',
              description: 'Idioma generaci\u00f3n',
              in: 'query',
              name: 'language'
            }
          ],
          tags: ['Incidents']
        }
      },
    '/modules/rankings/{rankingID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/rankingData' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        parameters: [
          {
            in: 'query',
            description: 'capacidad',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'limit'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          },
          {
            required: false,
            type: 'string',
            description: 'pagina',
            in: 'query',
            name: 'offset'
          },
          {
            required: true,
            type: 'string',
            description: 'identificador de Ranking',
            in: 'path',
            name: 'rankingID'
          }
        ],
        tags: ['Rankings']
      }
    },
    '/modules/tradingInformation/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/TradInfDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Trading Data']
      }
    },
    '/modules/ordinaryBalanceSheetAndIncomeStatement/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/oBSAISResponse' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/alertsapi/alerts/count': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/alertsCountDetails' }
          },
          404: {
            description: '404 Not found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Authentication failed',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        tags: ['Alerts']
      }
    },
    '/modules/consolidatedFinancialConnections/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: {
              $ref: '#/definitions/consolidatedFinancialConnectionDetail'
            }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/rankings': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/rankings' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: false,
            type: 'string',
            description: 'idioma',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Rankings']
      }
    },
    '/tendersapi/identifierType': {
      get: {
        responses: { 200: { description: '200 OK' } },
        parameters: [
          {
            required: false,
            type: 'integer',
            name: 'offset',
            in: 'query',
            format: 'int32'
          },
          {
            required: false,
            type: 'integer',
            name: 'limit',
            in: 'query',
            format: 'int32'
          }
        ],
        tags: ['Tenders']
      }
    },
    '/tendersapi/awardee/{country}/{identifierType}/{identifier}': {
      parameters: [
        { required: true, type: 'string', name: 'country', in: 'path' },
        {
          required: true,
          type: 'string',
          name: 'identifierType',
          in: 'path'
        },
        {
          required: true,
          type: 'string',
          name: 'identifier',
          in: 'path'
        },
        {
          required: true,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/modules/incidents/{organisationID}/affectedAsPlaintiff/bankruptcyProceedings/{incidentID}':
      {
        get: {
          responses: {
            200: {
              description: '200 OK',
              schema: { $ref: '#/definitions/bankruptcyIDDetail' }
            },
            404: {
              description: 'Recurso no encontrado',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            403: {
              description: 'Forbidden',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            401: {
              description: 'Unauthorized',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            500: {
              description: 'Internal error',
              schema: { $ref: '#/definitions/ErrorDetail' }
            }
          },
          parameters: [
            {
              required: true,
              type: 'string',
              name: 'organisationID',
              in: 'path'
            },
            {
              required: true,
              type: 'string',
              name: 'incidentID',
              in: 'path'
            },
            {
              required: false,
              type: 'string',
              name: 'language',
              in: 'query'
            }
          ],
          tags: ['Incidents']
        }
      },
    '/modules/investigatedReportEO/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/investDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Product Reports']
      }
    },
    '/tendersapi/awardee/{country}': {
      parameters: [
        { required: true, type: 'string', name: 'country', in: 'path' },
        { required: true, type: 'string', name: 'name', in: 'query' },
        {
          required: false,
          type: 'integer',
          name: 'offset',
          in: 'query',
          format: 'int32'
        },
        {
          required: false,
          type: 'integer',
          name: 'limit',
          in: 'query',
          format: 'int32'
        }
      ],
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    },
    '/alertsapi/alertTypes': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/alertsTypesDetails' }
          },
          404: {
            description: '404 Not found',
            schema: { $ref: '#/definitions/responseError' }
          },
          403: {
            description: '403 Forbidden',
            schema: { $ref: '#/definitions/responseError' }
          },
          401: {
            description: '401 Authentication failed',
            schema: { $ref: '#/definitions/responseError' }
          },
          400: {
            description: '400 Bad Request',
            schema: { $ref: '#/definitions/responseError' }
          },
          500: {
            description: '500 Internal Server Error',
            schema: { $ref: '#/definitions/responseError' }
          }
        },
        tags: ['Alerts']
      }
    },
    '/modules/ordinaryFinancialRatios/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: {
              $ref: '#/definitions/ordinaryFinancialRatiosDetail'
            }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Financial Data']
      }
    },
    '/modules/incidents/{organisationID}/defendant/bankruptcyProceedings/{incidentID}':
      {
        get: {
          responses: {
            200: {
              description: '200 OK',
              schema: {
                $ref: '#/definitions/defenbankruptcyProceedingsIDDetail'
              }
            },
            404: {
              description: 'Recurso no encontrado',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            403: {
              description: 'Forbidden',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            401: {
              description: 'Unauthorized',
              schema: { $ref: '#/definitions/ErrorDetail' }
            },
            500: {
              description: 'Internal error',
              schema: { $ref: '#/definitions/ErrorDetail' }
            }
          },
          parameters: [
            {
              required: true,
              type: 'string',
              description: 'identificador de la firma',
              in: 'path',
              name: 'organisationID'
            },
            {
              required: false,
              type: 'string',
              description: 'Idioma generaci\u00f3n',
              in: 'query',
              name: 'language'
            },
            {
              required: true,
              type: 'string',
              name: 'incidentID',
              in: 'path'
            }
          ],
          tags: ['Incidents']
        }
      },
    '/modules/officialGazetteOfMercantileRegistryDetail/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/OGOMRDDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          },
          {
            required: false,
            type: 'string',
            description: 'pagina',
            in: 'query',
            name: 'page'
          }
        ],
        tags: ['Trading Data']
      }
    },
    '/modules/corporateBodies/{organisationID}/pages/{page}/size/{size}': {
      get: {
        responses: {
          200: { description: '200 OK' },
          404: { description: 'Recurso no encontrado' },
          403: { description: 'Forbidden' },
          401: { description: 'Unauthorized' },
          500: { description: 'Internal error' }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          },
          {
            required: true,
            type: 'string',
            description: 'pagina',
            in: 'path',
            name: 'page'
          },
          { required: true, type: 'string', name: 'size', in: 'path' }
        ],
        tags: ['Trading Data']
      }
    },
    '/modules/employees/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/EmpDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Company Data']
      }
    },
    '/modules/activity/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/activityDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Identification']
      }
    },
    '/modules/evaluation/{organisationID}': {
      get: {
        responses: {
          200: {
            description: '200 OK',
            schema: { $ref: '#/definitions/EvaluationDetail' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Forbidden',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: true,
            type: 'string',
            description: 'identificador de la firma',
            in: 'path',
            name: 'organisationID'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma generaci\u00f3n',
            in: 'query',
            name: 'language'
          }
        ],
        tags: ['Risk Analysis']
      }
    },
    '/modules/organisations/': {
      get: {
        responses: {
          200: {
            description: 'Recurso recuperado correctamente',
            schema: { $ref: '#/definitions/organisationSearchResult' }
          },
          404: {
            description: 'Recurso no encontrado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          403: {
            description: 'Acceso no permitido',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          401: {
            description: 'No autorizado',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          400: {
            description: 'Parametros de peticion incorrectos',
            schema: { $ref: '#/definitions/ErrorDetail' }
          },
          500: {
            description: 'Internal error',
            schema: { $ref: '#/definitions/ErrorDetail' }
          }
        },
        parameters: [
          {
            required: false,
            type: 'string',
            description: 'Alias del usuario',
            in: 'query',
            name: 'user'
          },
          {
            required: false,
            type: 'string',
            description: 'Idioma del usuario',
            in: 'query',
            name: 'lang'
          },
          {
            in: 'query',
            description:
              'N\u00famero m\u00e1ximo de firmas de las localizadas a devolver',
            format: 'int32',
            required: false,
            type: 'integer',
            name: 'maxOrgs'
          },
          {
            required: false,
            type: 'string',
            description:
              'Denominaci\u00f3n por la que se quiere localizar firmas',
            in: 'query',
            name: 'name'
          },
          {
            required: false,
            type: 'string',
            description: 'Pa\u00eds',
            in: 'query',
            name: 'country'
          },
          {
            required: false,
            type: 'string',
            description: 'Calle',
            in: 'query',
            name: 'street'
          },
          {
            required: false,
            type: 'string',
            description: 'Municipio',
            in: 'query',
            name: 'city'
          },
          {
            required: false,
            type: 'string',
            description: 'C\u00f3digo postal',
            in: 'query',
            name: 'postCode'
          },
          {
            required: false,
            type: 'string',
            description: 'Provincia',
            in: 'query',
            name: 'countrySubidentName'
          },
          {
            required: false,
            type: 'string',
            description: 'N\u00famero de identificaci\u00f3n (NIF,CIF)',
            in: 'query',
            name: 'registeredOfficeCode'
          },
          {
            in: 'query',
            description:
              'Puntuaci\u00f3n m\u00ednima de coincidencia de las firmas localizadas con la Denominaci\u00f3n y Datos del Domicilio.',
            format: 'double',
            required: false,
            type: 'number',
            name: 'minScore'
          }
        ],
        tags: ['Companies']
      }
    },
    '/tendersapi/subscriptions/definitions': {
      get: {
        responses: { 200: { description: '200 OK' } },
        tags: ['Tenders']
      }
    }
  },
  schemes: ['https'],
  produces: ['application/json'],
  basePath: '/',
  tags: [
    {
      name: 'Identification',
      description: 'Identification data about the organisations'
    },
    {
      name: 'Company Data',
      description: 'Company data about the organisations'
    },
    {
      name: 'Trading Data',
      description: 'Trading data about organisations'
    },
    {
      name: 'Financial Data',
      description: 'Financial data about the organisations'
    },
    {
      name: 'Incidents',
      description: 'Incidents data about the organisations'
    },
    {
      name: 'Risk Analysis',
      description: 'Risk Analysis data about the organisations'
    },
    { name: 'Product Reports', description: 'Product Reports' },
    {
      name: 'Companies',
      description: 'methods for search organisations'
    },
    {
      name: 'Rankings',
      description: 'Rankings data about the organisations'
    },
    { name: 'Tenders', description: 'Information about Tenders' },
    { name: 'Alerts', description: 'Methods for alerts' }
  ],
  securityDefinitions: {
    ClientSecretHeader: {
      in: 'header',
      type: 'apiKey',
      description: 'Unique token directly related to the client contract',
      name: 'X-IBM-Client-Secret'
    },
    APIKeyHeader: {
      type: 'apiKey',
      name: 'X-IBM-Client-Id',
      in: 'header'
    }
  },
  host: 'apipre.iberinform.es',
  definitions: {
    DefLegProcIDDetails: {
      properties: {
        courtType: { type: 'string' },
        rating: { type: 'string' },
        orderNumber: { type: 'string' },
        proceedingDate: { type: 'string' },
        claimed: { type: 'string' },
        proceeding: { type: 'string' },
        statusHistory: {
          items: {
            type: 'object',
            properties: {
              fecha: { type: 'string' },
              estado: { type: 'string' }
            }
          },
          type: 'array'
        },
        defendants: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        },
        embargoed: { type: 'string' },
        embargoedAddress: {
          items: {
            type: 'object',
            properties: {
              homeValuation: { type: 'string' },
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        },
        courtTown: { type: 'string' },
        courtNumber: { type: 'number' },
        status: { type: 'string' },
        publications: {
          items: {
            type: 'object',
            properties: {
              media: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              datePublished: { type: 'string' }
            }
          },
          type: 'array'
        },
        statusDate: { type: 'string' },
        plaintiffs: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"claimed":"string","courtNumber":0,"courtTown":"string","courtType":"string","defendants":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-04T08:16:40.791Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"embargoed":"string","embargoedAddress":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-04T08:16:40.791Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"homeValuation":"string"}],"orderNumber":"string","plaintiffs":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-04T08:16:40.791Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"proceeding":"string","proceedingDate":"string","publications":[{"datePublished":"string","media":{"code":"string","value":"string"}}],"rating":"string","status":"string","statusDate":"string","statusHistory":[{"estado":"string","fecha":"string"}]}',
      description: ''
    },
    LeProcDetail: {
      properties: {
        claims: {
          items: { type: 'object', properties: {} },
          type: 'array'
        },
        claimsNumber: { type: 'number' }
      },
      type: 'object',
      example: '{"claims":[{}],"claimsNumber":0}',
      description: ''
    },
    DefClaimsDetail: {
      properties: {
        claims: {
          items: {
            type: 'object',
            properties: {
              startDate: { type: 'string' },
              endDate: { type: 'string' },
              idFile: { type: 'string' },
              claimPublicationDate: { type: 'string' },
              claimedAmount: { type: 'string' },
              claimantType: {
                type: 'object',
                properties: {
                  description: { type: 'string' },
                  id: { type: 'string' }
                }
              },
              claimConcept: {
                type: 'object',
                properties: {
                  description: { type: 'string' },
                  id: { type: 'string' }
                }
              },
              id: { type: 'number' }
            }
          },
          type: 'array'
        },
        claimsNumber: { type: 'number' }
      },
      type: 'object',
      example:
        '{"claims":[{"claimConcept":{"description":"string","id":"string"},"claimPublicationDate":"string","claimantType":{"description":"string","id":"string"},"claimedAmount":"string","endDate":"string","id":0,"idFile":"string","startDate":"string"}],"claimsNumber":0}',
      description: ''
    },
    organismSearchDetails: {
      properties: {
        numResults: { type: 'number' },
        totalResults: { type: 'number' },
        tenders: {
          items: {
            type: 'object',
            properties: {
              tenderSource: { type: 'string' },
              endDate: { type: 'string' },
              description: { type: 'string' },
              cpvDescriptionES: { type: 'string' },
              adjNifOrganism: { type: 'string' },
              cpvDescriptionEN: { type: 'string' },
              date: { type: 'string' },
              contractType: { type: 'string' },
              id: { type: 'number' },
              title: { type: 'string' },
              adjOrganism: { type: 'string' },
              adjBudget: { type: 'string' },
              budget: { type: 'string' },
              record: { type: 'string' },
              cpv: { type: 'string' },
              country: {},
              organism: { type: 'string' },
              tenderState: { type: 'string' },
              cpvDescriptionPT: { type: 'string' }
            }
          },
          type: 'array'
        },
        trigramCounters: {}
      },
      type: 'object',
      example:
        '{"totalResults":1,"numResults":1,"tenders":[{"adjBudget":"247632.34","adjOrganism":"ABBSOLUTE COMUNICACI\u00d3N, S.L.","adjNifOrganism":"B91348755","id":3386918,"date":"09/08/2019","record":"059/19-CO","organism":"Direcci\u00f3n General de la Entidad P\u00fablica Empresarial RED.ES","title":"Servicio de creaci\u00f3n y gesti\u00f3n del pabell\u00f3n de Espa\u00f1a en Mobile World Congress 2020 y servicios asociados","description":"Id licitaci\u00f3n: 059/19-CO; \u00d3rgano de Contrataci\u00f3n: Direcci\u00f3n General de la Entidad P\u00fablica Empresarial RED.ES; Importe: 246572.09 EUR; Estado: RES","budget":"298352.22","endDate":"16/09/2019","cpv":"79340000, 79951000, 79952000, 79341000, 79950000","contractType":"Servicios","country":null,"tenderSource":"Contrataci\u00f3n del Estado","tenderState":"Resuelta","cpvDescriptionEN":"Advertising and marketing services|Seminar organisation services|Event services|Advertising services|Exhibition, fair and congress organisation services","cpvDescriptionES":"Servicios de publicidad y de marketing|Servicio de organizaci\u00f3n de seminarios|Servicios de eventos|Servicios de publicidad|Servicios de organizaci\u00f3n de exposiciones, ferias y congresos","cpvDescriptionPT":"Servi\u00e7os de publicidade e marketing|Servi\u00e7os de organiza\u00e7\u00e3o de semin\u00e1rios|Servi\u00e7os de eventos|Servi\u00e7os de publicidade|Servi\u00e7os de organiza\u00e7\u00e3o de exposi\u00e7\u00f5es, feiras e congressos"}],"trigramCounters":null}',
      description: ''
    },
    CFADetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              workingCapital: { type: 'string' },
              reservations: { type: 'string' },
              employees: { type: 'string' },
              equity: { type: 'string' },
              sales: { type: 'string' },
              period: { type: 'string' },
              result: { type: 'string' },
              year: { type: 'string' },
              shortTermDebt: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"employees":"string","equity":"string","period":"string","reservations":"string","result":"string","sales":"string","shortTermDebt":"string","workingCapital":"string","year":"string"}]}',
      description: ''
    },
    orgIdent: {
      required: ['orgIdentId', 'orgIdentStrId', 'orgIdentType'],
      properties: {
        orgIdentStrId: { type: 'string' },
        orgIdentType: { type: 'string' },
        orgIdentId: { type: 'integer', format: 'int32' }
      }
    },
    countriesDetails: {
      items: {
        type: 'object',
        properties: {
          country: { type: 'string' },
          bigram: { type: 'string' },
          trigram: { type: 'string' }
        }
      },
      type: 'array',
      description: '',
      example:
        '[{"country":"Aruba","trigram":"ABW","bigram":"AW"},{"country":"Afghanistan","trigram":"AFG","bigram":"AF"},{"country":"Angola","trigram":"AGO","bigram":"AO"},{"country":"Anguilla","trigram":"AIA","bigram":"AI"},{"country":"\u00c5land Islands","trigram":"ALA","bigram":"AX"},{"country":"Albania","trigram":"ALB","bigram":"AL"},{"country":"Andorra","trigram":"AND","bigram":"AD"},{"country":"Emiratos \u00c1rabes Unidos","trigram":"ARE","bigram":"AE"},{"country":"Argentina","trigram":"ARG","bigram":"AR"},{"country":"Armenia","trigram":"ARM","bigram":"AM"}]'
    },
    IdenDDetail: {
      properties: {
        familyCompany: { type: 'string' },
        status: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        commercialTitle: {
          type: 'object',
          properties: {
            items: { items: { type: 'string' }, type: 'array' },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        corporateMail: { type: 'string' },
        companyName: { type: 'string' },
        acronym: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        seasonality: { type: 'string' },
        taxId: { type: 'string' },
        legalForm: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        documentedExistence: { type: 'string' },
        web: { type: 'string' },
        notAvailable: { type: 'string' },
        dataSource: { type: 'string' }
      },
      type: 'object',
      example:
        '{"acronym":{"code":"string","value":"string"},"commercialTitle":{"dataSource":{"date":"string","source":"string"},"items":["string"],"unavailabilityReason":"string"},"companyName":"string","corporateMail":"string","dataSource":"string","documentedExistence":"string","familyCompany":"string","legalForm":{"code":"string","value":"string"},"notAvailable":"string","seasonality":"string","status":{"code":"string","value":"string"},"taxId":"string","web":"string"}',
      description: ''
    },
    ResDetail: {
      properties: {
        activities: {
          items: {
            type: 'object',
            properties: {
              activityClassCategory: { type: 'string' },
              activityClassCode: { type: 'string' },
              activityClassType: { type: 'string' },
              activityClassDesc: { type: 'string' },
              activityClassVersion: { type: 'string' }
            }
          },
          type: 'array'
        },
        commercialTitle: { type: 'string' },
        name: { type: 'string' },
        startDate: { type: 'string' },
        orgStatus: {
          type: 'object',
          properties: {
            statusDate: { type: 'string' },
            statusDesc: { type: 'string' },
            statusCode: { type: 'string' }
          }
        },
        address: {
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            street: { type: 'string' },
            postcode: { type: 'string' },
            countrySubident: { type: 'string' }
          }
        },
        nd: { type: 'string' },
        telephone: { type: 'string' },
        shareCapital: { type: 'string' },
        legalForm: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        currency: { type: 'string' },
        web: { type: 'string' },
        registeredOffice: {
          type: 'object',
          properties: {
            registeredOfficeCode: { type: 'string' },
            registeredOfficeType: { type: 'string' }
          }
        }
      },
      type: 'object',
      example:
        '{"activities":[{"activityClassCategory":"string","activityClassCode":"string","activityClassDesc":"string","activityClassType":"string","activityClassVersion":"string"}],"address":{"city":"string","country":"string","countrySubident":"string","postcode":"string","street":"string"},"commercialTitle":"string","currency":"string","legalForm":{"code":"string","value":"string"},"name":"string","nd":"string","orgStatus":{"statusCode":"string","statusDate":"string","statusDesc":"string"},"registeredOffice":{"registeredOfficeCode":"string","registeredOfficeType":"string"},"shareCapital":"string","startDate":"string","telephone":"string","web":"string"}',
      description: ''
    },
    DFDetail: {
      properties: {
        fechaApunteMasReciente: { type: 'string' },
        apuntes: { type: 'number' },
        importe: { type: 'number' }
      },
      type: 'object',
      example:
        '{"apuntes":0,"fechaApunteMasReciente":"2019-09-26T06:36:54.837Z","importe":0}',
      description: ''
    },
    asnefDetails: {
      properties: {
        operations: {
          items: {
            type: 'object',
            properties: {
              operationsHistory: {
                items: {
                  type: 'object',
                  properties: {
                    date: { type: 'string' },
                    state: { type: 'string' },
                    numberUnpaidContributions: { type: 'number' },
                    unpaidAmount: { type: 'number' }
                  }
                },
                type: 'array'
              },
              operationSummary: {
                type: 'object',
                properties: {
                  product: { type: 'string' },
                  creditorType: { type: 'string' },
                  lastExpirationDate: { type: 'string' },
                  numberUnpaidContributions: { type: 'number' },
                  unpaidAmount: { type: 'number' },
                  state: { type: 'string' },
                  firstExpirationDate: { type: 'string' },
                  nominalAmount: { type: 'number' }
                }
              }
            }
          },
          type: 'array'
        },
        notAvailable: { type: 'string' },
        unpaidProgression: {
          items: {
            type: 'object',
            properties: {
              date: { type: 'string' },
              amount: { type: 'number' }
            }
          },
          type: 'array'
        },
        message: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            description: { type: 'string' }
          }
        },
        unpaidSummary: {
          items: {
            type: 'object',
            properties: {
              situation: { type: 'string' },
              operationsNumber: { type: 'number' },
              operationsAmount: { type: 'number' },
              year: { type: 'number' }
            }
          },
          type: 'array'
        },
        totals: {
          type: 'object',
          properties: {
            nominalAmount: { type: 'number' },
            unpaidAmount: { type: 'number' },
            firstAmountDate: { type: 'string' },
            lastAmountDate: { type: 'string' },
            unpaidContributions: { type: 'number' }
          }
        }
      },
      type: 'object',
      example:
        '{"message":{"code":"string","description":"string"},"notAvailable":"string","operations":[{"operationSummary":{"creditorType":"string","firstExpirationDate":"2020-03-12T11:47:49.665Z","lastExpirationDate":"2020-03-12T11:47:49.665Z","nominalAmount":0,"numberUnpaidContributions":0,"product":"string","state":"string","unpaidAmount":0},"operationsHistory":[{"date":"2020-03-12T11:47:49.665Z","numberUnpaidContributions":0,"state":"string","unpaidAmount":0}]}],"totals":{"firstAmountDate":"2020-03-12T11:47:49.665Z","lastAmountDate":"2020-03-12T11:47:49.665Z","nominalAmount":0,"unpaidAmount":0,"unpaidContributions":0},"unpaidProgression":[{"amount":0,"date":"2020-03-12T11:47:49.665Z"}],"unpaidSummary":[{"operationsAmount":0,"operationsNumber":0,"situation":"string","year":0}]}',
      description: ''
    },
    TradInfDetail: {
      properties: {
        companyBodies: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  position: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  name: { type: 'string' },
                  holding: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        relationships: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  relationshipType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  name: { type: 'string' },
                  holding: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        groupParentCompany: { type: 'string' },
        shareCapitalChange: {
          type: 'object',
          properties: {
            variationSign: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            expectedAmount: { type: 'string' },
            changeDate: { type: 'string' },
            currentAmount: { type: 'string' },
            previousAmount: { type: 'string' }
          }
        },
        notAvailable: { type: 'string' },
        consolidated: { type: 'string' },
        corporatePurposeChange: {
          type: 'object',
          properties: {
            date: { type: 'string' },
            newCorporatePurpose: { type: 'string' },
            variationType: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"companyBodies":{"dataSource":{"date":"string","source":"string"},"items":[{"holding":"string","name":"string","position":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"consolidated":"string","corporatePurposeChange":{"date":"string","newCorporatePurpose":"string","variationType":{"code":"string","value":"string"}},"groupParentCompany":"string","notAvailable":"string","relationships":{"dataSource":{"date":"string","source":"string"},"items":[{"country":{"code":"string","value":"string"},"holding":"string","name":"string","relationshipType":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"shareCapitalChange":{"changeDate":"string","currentAmount":"string","expectedAmount":"string","previousAmount":"string","variationSign":{"code":"string","value":"string"}}}',
      description: ''
    },
    tendersDetail: {
      properties: {
        numResults: { type: 'number' },
        totalResults: { type: 'number' },
        tenders: {
          items: {
            type: 'object',
            properties: {
              tenderSource: { type: 'string' },
              endDate: { type: 'string' },
              description: { type: 'string' },
              cpvDescriptionES: { type: 'string' },
              cpvDescriptionEN: { type: 'string' },
              date: { type: 'string' },
              contractType: { type: 'string' },
              id: { type: 'number' },
              title: { type: 'string' },
              country: {},
              budget: { type: 'string' },
              record: { type: 'string' },
              cpv: { type: 'string' },
              organism: { type: 'string' },
              tenderState: { type: 'string' },
              cpvDescriptionPT: { type: 'string' }
            }
          },
          type: 'array'
        },
        trigramCounters: {}
      },
      type: 'object',
      example:
        '{"totalResults":86937,"numResults":20,"tenders":[{"id":3219783,"date":"26/09/2019","record":"2019/794","organism":"Xarxa Local de Municipis Gironins (XALOC)","title":"Servei de prevenci\u00f3 de riscos laborals ali\u00e8, tant en les especialitats t\u00e8cniques (seguretat, higiene, ergonomia i psicosociologia) com de vigil\u00e0ncia i promoci\u00f3 de la salut, del personal laboral i funcionari al servei de la Xarxa Local de Municipis Gironins de la Diputaci\u00f3 de Girona (XALOC), en qualsevol dels seus centres.","description":"Id licitaci\u00f3n: 2019/794; \u00d3rgano de Contrataci\u00f3n: Xarxa Local de Municipis Gironins (XALOC); Importe: 15045.50; Estado: EVALUACION","budget":"33100.1","endDate":"25/09/2019","cpv":"71317000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Hazard protection and control consultancy services","cpvDescriptionES":"Servicios de consultor\u00eda en protecci\u00f3n y control de riesgos","cpvDescriptionPT":"Servi\u00e7os de consultoria em mat\u00e9ria de controlo e protec\u00e7\u00e3o contra os riscos potenciais"},{"id":3219784,"date":"26/09/2019","record":"60/2019","organism":"Patronat Municipal de Turisme de Vila-seca","title":"Contractaci\u00f3 del servei de construcci\u00f3 d\'un conjunt escult\u00f2ric de sorra al Pinar de Perruquet, la Pineda, Vila-seca","description":"Id licitaci\u00f3n: 60/2019; \u00d3rgano de Contrataci\u00f3n: Patronat Municipal de Turisme de Vila-seca; Importe: 54000.00; Estado: EVALUACION","budget":"54000.0","endDate":"25/09/2019","cpv":"92312230","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Services provided by sculptors","cpvDescriptionES":"Servicios prestados por escultores","cpvDescriptionPT":"Servi\u00e7os prestados por escultores"},{"id":3219785,"date":"15/10/2019","record":"CSdM 21/19-ASS","organism":"Consorci Sanitari del Maresme","title":"Subministrament de 30 monitors de constants per a les unitats d\'hospitalitzaci\u00f3 de l\'Hospital de Matar\u00f3, per enc\u00e0rrec del Consorci Sanitari del Maresme","description":"Id licitaci\u00f3n: CSdM 21/19-ASS; \u00d3rgano de Contrataci\u00f3n: Consorci Sanitari del Maresme; Importe: 75000.00; Estado: EVALUACION","budget":"75000.0","endDate":null,"cpv":"33100000","contractType":"Suministros","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Medical equipments","cpvDescriptionES":"Equipamiento m\u00e9dico","cpvDescriptionPT":"Equipamento m\u00e9dico"},{"id":3219786,"date":"30/09/2019","record":"12/2019","organism":"Institut Catal\u00e0 de Finances (ICF)","title":"El servei haur\u00e0 de donar cobertura a les actuals necessitats de negoci, de gesti\u00f3 dels productes comercialitzats per l\'ICF, aix\u00ed com a les necessitats tecnol\u00f2giques per a l\'esmentada continu\u00eftat del negoci de l\'ICF.\\nEl servei donar\u00e0 a l\'ICF, la capacitat de disposar dels mecanismes per adaptar-se als nous requeriments que en un futur puguin sorgir, com la possible comercialitzaci\u00f3 d\'altres tipus de productes bancaris a l\'ICF, o modificacions en l\'entorn tecnol\u00f2gic, a m\u00e9s de les actualitzacions normatives promogudes pels reguladors, en un entorn actual de permanent canvi. \\nAquest servei haur\u00e0 de ser ofert per el contractista en format de programari com a servei i des d\'un o diversos centres de processament de dades (CPD, d\'ara endavant) amb una certificaci\u00f3 m\u00ednima per a tots ells de TIER III.","description":"Id licitaci\u00f3n: 12/2019; \u00d3rgano de Contrataci\u00f3n: Institut Catal\u00e0 de Finances (ICF); Importe: 5400000.00; Estado: EVALUACION","budget":"9150000.0","endDate":"30/09/2019","cpv":"72212900","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Miscellaneous software development services and computer systems","cpvDescriptionES":"Servicios de desarrollo de software y sistemas inform\u00e1ticos diversos","cpvDescriptionPT":"Servi\u00e7os de desenvolvimento de software e sistemas inform\u00e1ticos diversos"},{"id":3219787,"date":"27/09/2019","record":"14803285","organism":"Ferrocarril Metropolit\u00e0 de Barcelona, SA","title":"Al juny de 2009 es va signar un acord amb la part social on, davant de l\'ampliaci\u00f3 de L\u00ednies Autom\u00e0tiques s\'ha de facilitar la promoci\u00f3 interna i aix\u00f2 implica donar cobertura primer a la formaci\u00f3 t\u00e8cnica per la equiparaci\u00f3 de coneixements FP II / Cicles.","description":"Id licitaci\u00f3n: 14803285; \u00d3rgano de Contrataci\u00f3n: Ferrocarril Metropolit\u00e0 de Barcelona, SA; Importe: 40000.00; Estado: RESUELTA","budget":"40000.0","endDate":"24/05/2019","cpv":"80530000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Resuelta","cpvDescriptionEN":"Vocational training services","cpvDescriptionES":"Servicios de formaci\u00f3n profesional","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o profissional"},{"id":3219788,"date":"10/09/2019","record":"2019/4139","organism":"Ajuntament de Calonge i Sant Antoni","title":"Contractaci\u00f3 del servei d\'organitzaci\u00f3 de diferents festes de Promoci\u00f3 Tur\u00edstica del municipi amb retransmissi\u00f3 radiof\u00f2nica en directe","description":"Id licitaci\u00f3n: 2019/4139; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Calonge i Sant Antoni; Importe: 99300.00; Estado: RESUELTA","budget":"99300.0","endDate":"14/06/2019","cpv":"79954000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Resuelta","cpvDescriptionEN":"Party organisation services","cpvDescriptionES":"Servicios de organizaci\u00f3n de fiestas","cpvDescriptionPT":"Servi\u00e7os de organiza\u00e7\u00e3o de recep\u00e7\u00f5es"},{"id":3219789,"date":"10/09/2019","record":"2019/5/TAD","organism":"Ajuntament de Castellbisbal","title":"Servei de neteja dels centres educatius p\u00fablics de Castellbisbal","description":"Id licitaci\u00f3n: 2019/5/TAD; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Castellbisbal; Importe: 518600.00; Estado: ADJUDICADA","budget":"570460.0","endDate":"25/06/2019","cpv":"90919300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"School cleaning services","cpvDescriptionES":"Servicios de limpieza de escuelas","cpvDescriptionPT":"Servi\u00e7os de limpeza de escolas"},{"id":3219790,"date":"09/08/2019","record":"SER_OBE_2019_0018","organism":"Ajuntament de Lleida","title":"Prestaci\u00f3 del servei de bar i menjador a les Llars de jubilats de la ciutat de Lleida mitjan\u00e7ant l\'ocupaci\u00f3 de persones amb discapacitat amb especials dificultats per a la inserci\u00f3 laboral, amb reserva a un Centre Especial de Treball d\'iniciativa social i sense \u00e0nim de lucre, d\'acord amb el previst per la Disposici\u00f3 addicional quarta de la Llei 9/2017 de 8 de novembre, de Contractes del Sector P\u00fablic.\\nAls efectes de l\'objecte relatiu a la inserci\u00f3 laboral de persones amb discapacitat, es consideren persones amb discapacitat amb especials dificultats les persones pertanyent a un dels seg\u00fcents grups: a) Persones amb par\u00e0lisi cerebral, persones amb trastorn mental o persones amb discapacitat intel\u00bflectual, amb un grau de discapacitat reconegut igual o superior al 33%. b) Persones amb discapacitat f\u00edsica o sensorial, amb un grau de discapacitat reconegut igual o superior al 65%.","description":"Id licitaci\u00f3n: SER_OBE_2019_0018; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Lleida; Importe: 24918.50; Estado: EVALUACION","budget":"39814.35","endDate":"09/08/2019","cpv":"55330000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Cafeteria services","cpvDescriptionES":"Servicios de cafeter\u00eda","cpvDescriptionPT":"Servi\u00e7os de cafetaria"},{"id":3219791,"date":"10/09/2019","record":"20180039","organism":"La Farga, Gesti\u00f3 d\'Equipaments Municipals de l\'Hospitalet de Llobregat, SA","title":"Contractaci\u00f3 del servei de manteniment integral preventiu i correctiu de 60 parqu\u00edmetres instal\u00b7lats a la ciutat de l\'Hospitalet de Llobregat.","description":"Id licitaci\u00f3n: 20180039; \u00d3rgano de Contrataci\u00f3n: La Farga, Gesti\u00f3 d\'Equipaments Municipals de l\'Hospitalet de Llobregat, SA; Importe: 151200.00; Estado: ADJUDICADA","budget":"151200.0","endDate":"16/07/2018","cpv":"50324200","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Preventive maintenance services","cpvDescriptionES":"Servicios de mantenimiento preventivo","cpvDescriptionPT":"Servi\u00e7os de manuten\u00e7\u00e3o preventiva"},{"id":3219792,"date":"26/09/2019","record":"2440/19","organism":"Institut de Cultura de Barcelona","title":"Digitalitzaci\u00f3 de documentaci\u00f3 (col\u00b7lecci\u00f3 Diari de Barcelona i fons d\'arxiu i de gr\u00e0fics) de l\'Arxiu Hist\u00f2ric de Barcelona","description":"Id licitaci\u00f3n: 2440/19; \u00d3rgano de Contrataci\u00f3n: Institut de Cultura de Barcelona; Importe: 45634.44; Estado: EVALUACION","budget":"45634.44","endDate":"25/09/2019","cpv":"79520000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Reprographic services","cpvDescriptionES":"Servicios de reprograf\u00eda","cpvDescriptionPT":"Servi\u00e7os de reprografia"},{"id":3219793,"date":"10/09/2019","record":"37734","organism":"Ajuntament de Matar\u00f3","title":"obres del projecte de renovaci\u00f3 de la gespa artificial del Camp Municipal de Futbol de Cirera","description":"Id licitaci\u00f3n: 37734; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Matar\u00f3; Importe: 144686.52; Estado: EN PLAZO","budget":"173623.81","endDate":"01/10/2019","cpv":"45212200","contractType":"Obras","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Construction work for sports facilities","cpvDescriptionES":"Trabajos de construcci\u00f3n de instalaciones deportivas","cpvDescriptionPT":"Constru\u00e7\u00e3o de instala\u00e7\u00f5es desportivas"},{"id":3219794,"date":"27/09/2019","record":"I19.0037S","organism":"Institut d\'Investigacions Biom\u00e8diques August Pi i Sunyer","title":"Subministrament de kits d\'an\u00e0lisis de biomarcadors inflamatoris i an\u00e0lisis individual de biomarcadors per t\u00e8cniques ELISA pel projecte de recerca PI18/00974 de l\'IDIBAPS, en funci\u00f3 de les necessitats","description":"Id licitaci\u00f3n: I19.0037S; \u00d3rgano de Contrataci\u00f3n: Institut d\'Investigacions Biom\u00e8diques August Pi i Sunyer; Importe: 61285.00; Estado: EVALUACION","budget":"99077.42","endDate":"27/09/2019","cpv":"33141625","contractType":"Suministros","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Diagnostic kits","cpvDescriptionES":"Kits para diagn\u00f3stico","cpvDescriptionPT":"Kits de diagn\u00f3stico"},{"id":3219795,"date":"16/08/2019","record":"CS 86/19","organism":"Consell Comarcal del Bages","title":"L\'objecte d\'aquest contracte \u00e9s oferir el servei de monitoratge, durant el servei de menjador escolar, per tal de donar suport a l\'alumnat amb necessitats educatives especials com poden ser discapacitats motriu, trastorns de l\'espectre de l\'autisme, trastorns conductuals, que manifestin dificultats en l\'autonomia personal i la regulaci\u00f3 de la conducta, amb l\'objectiu de facilitar la seva inclusi\u00f3 educativa i aconseguir el seu desenvolupament integral i una major autonomia personal, aquest servei es prestar\u00e0 en determinats centres educatius de la comarca del Bages.","description":"Id licitaci\u00f3n: CS 86/19; \u00d3rgano de Contrataci\u00f3n: Consell Comarcal del Bages; Importe: 14.58; Estado: EVALUACION","budget":"89302.5","endDate":"16/08/2019","cpv":"80410000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Various school services","cpvDescriptionES":"Servicios escolares diversos","cpvDescriptionPT":"Servi\u00e7os escolares diversos"},{"id":3219796,"date":"19/09/2019","record":"GO-2020-4","organism":"Departament de Pol\u00edtiques Digitals i Administraci\u00f3 P\u00fablica","title":"Serveis de disseny, construcci\u00f3, muntatge, desmuntatge i supervisi\u00f3 dels estands de la Generalitat de Catalunya a la fira MWC Barcelona, que se celebrar\u00e0 del 24 al 27 de febrer de 2020.","description":"Id licitaci\u00f3n: GO-2020-4; \u00d3rgano de Contrataci\u00f3n: Departament de Pol\u00edtiques Digitals i Administraci\u00f3 P\u00fablica; Importe: 150000.00; Estado: EN PLAZO","budget":"150000.0","endDate":"02/10/2019","cpv":"79950000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Exhibition, fair and congress organisation services","cpvDescriptionES":"Servicios de organizaci\u00f3n de exposiciones, ferias y congresos","cpvDescriptionPT":"Servi\u00e7os de organiza\u00e7\u00e3o de exposi\u00e7\u00f5es, feiras e congressos"},{"id":3219798,"date":"23/08/2019","record":"CSMS 12/19-N","organism":"Corporaci\u00f3 de Salut del Maresme i la Selva","title":"Serveis Postals per a la Corporaci\u00f3 de Salut del Maresme i la Selva.","description":"Id licitaci\u00f3n: CSMS 12/19-N; \u00d3rgano de Contrataci\u00f3n: Corporaci\u00f3 de Salut del Maresme i la Selva; Importe: 278403.54; Estado: EN PLAZO","budget":"519686.62","endDate":"10/09/2019","cpv":"64110000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Postal services","cpvDescriptionES":"Servicios postales","cpvDescriptionPT":"Servi\u00e7os postais"},{"id":3219799,"date":"10/09/2019","record":"H190000078","organism":"Institut Municipal d\'Hisenda de Barcelona","title":"Subministrament d\'equips inform\u00e0tics per l\'Institut Municipal d\'Hisenda de Barcelona","description":"Id licitaci\u00f3n: H190000078; \u00d3rgano de Contrataci\u00f3n: Institut Municipal d\'Hisenda de Barcelona; Importe: 71380.00; Estado: EVALUACION","budget":"85656.0","endDate":"10/09/2019","cpv":"30213100, 30213300","contractType":"Suministros","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Portable computers|Desktop computer","cpvDescriptionES":"Ordenadores port\u00e1tiles|Ordenadores de mesa","cpvDescriptionPT":"Computadores port\u00e1teis|Computadores de secret\u00e1ria (desktop computers)"},{"id":3219800,"date":"10/09/2019","record":"45-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis d\'execuci\u00f3 de programes a mida d\'innovaci\u00f3 socioecon\u00f2mica,amb objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 45-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 118601.84; Estado: EVALUACION","budget":"593009.2","endDate":"10/09/2019","cpv":"79421000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Project-management services other than for construction work","cpvDescriptionES":"Servicios de gesti\u00f3n de proyectos que no sean los de construcci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de gest\u00e3o de projectos, excepto projectos de constru\u00e7\u00e3o"},{"id":3219801,"date":"10/09/2019","record":"CTTE478","organism":"Tractament i Selecci\u00f3 de Residus, S.A.","title":"Servei de gesti\u00f3 dels matalassos dels punts verds de l\'\u00c0rea Metropolitana de Barcelona i del Centre de Tractament de Residus Municipals (CTRM) de Gav\u00e0-Viladecans.","description":"Id licitaci\u00f3n: CTTE478; \u00d3rgano de Contrataci\u00f3n: Tractament i Selecci\u00f3 de Residus, S.A.; Importe: 880000.00; Estado: EVALUACION","budget":"2112000.0","endDate":"10/09/2019","cpv":"90513000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Non-hazardous refuse and waste treatment and disposal services","cpvDescriptionES":"Servicios de tratamiento y eliminaci\u00f3n de desperdicios y residuos no peligrosos","cpvDescriptionPT":"Servi\u00e7os de tratamento e elimina\u00e7\u00e3o de res\u00edduos e lixos n\u00e3o-perigosos"},{"id":3219802,"date":"01/08/2019","record":"CON-PO 32/2019","organism":"Sumar, serveis p\u00fablics d\'acci\u00f3 social de Catalunya, SL","title":"L\'objecte d\'aquest contracte \u00e9s la regulaci\u00f3 de les condicions administratives, econ\u00f2miques i t\u00e8cniques particulars per a l\'adjudicaci\u00f3 i posterior execuci\u00f3 del contracte de subministrament per lots de material de lampisteria i electricitat, i ferreteria per als centres gestionats per SUMAR, Serveis P\u00fablics d\'Acci\u00f3 Social de Catalunya, S.L., en endavant SUMAR, d\'acord amb les condicions que s\'estableixen al Plec de Prescripcions t\u00e8cniques regulador d\'aquest procediment.","description":"Id licitaci\u00f3n: CON-PO 32/2019; \u00d3rgano de Contrataci\u00f3n: Sumar, serveis p\u00fablics d\'acci\u00f3 social de Catalunya, SL; Importe: 39639.11; Estado: EN PLAZO","budget":"87206.04","endDate":"10/09/2019","cpv":"44316000, 09310000","contractType":"Suministros","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Ironmongery|Electricity","cpvDescriptionES":"Ferreter\u00eda|Electricidad","cpvDescriptionPT":"Quinquilharias|Electricidade"},{"id":3219803,"date":"10/09/2019","record":"41-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis d\'informaci\u00f3 i assessorament en drets laborals en tres districtes de la ciutat, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 41-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 115871.02; Estado: EVALUACION","budget":"602529.3","endDate":"10/09/2019","cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"}],"trigramCounters":null}',
      description: ''
    },
    cpvsDetails: {
      items: {
        type: 'object',
        properties: {
          code: { type: 'string' },
          description: { type: 'string' }
        }
      },
      type: 'array',
      description: '',
      example:
        '[{"code":"03000000","description":"Agricultural, farming, fishing, forestry and related products"},{"code":"03100000","description":"Agricultural and horticultural products"},{"code":"03110000","description":"Crops, products of market gardening and horticulture"},{"code":"03111000","description":"Seeds"},{"code":"03111100","description":"Soya beans"},{"code":"03111200","description":"Peanuts"},{"code":"03111300","description":"Sunflower seeds"},{"code":"03111400","description":"Cotton seeds"},{"code":"03111500","description":"Sesame seeds"},{"code":"03111600","description":"Mustard seeds"},{"code":"03111700","description":"Vegetable seeds"},{"code":"03111800","description":"Fruit seeds"},{"code":"03111900","description":"Flower seeds"},{"code":"03112000","description":"Unmanufactured tobacco"},{"code":"03113000","description":"Plants used for sugar manufacturing"},{"code":"03113100","description":"Sugar beet"},{"code":"03113200","description":"Sugar cane"},{"code":"03114000","description":"Straw and forage"},{"code":"03114100","description":"Straw"},{"code":"03114200","description":"Forage"}]'
    },
    rankings: {
      items: { $ref: '#/definitions/ranking' },
      type: 'array',
      description: '',
      example:
        '[{"rankingID":"01","description":"Ventas","units":"Euros","order":"desc","limit":1000},{"rankingID":"02","description":"N\u00famero de Empleados","units":"Unidades","order":"desc","limit":1500},{"rankingID":"03","description":"Fecha de Constituci\u00f3n","units":"Fecha","order":"desc","limit":1000}]'
    },
    organisation: {
      required: [
        'activity',
        'legalForm',
        'nameAddress',
        'orgIdent',
        'orgStatus',
        'registeredOffice',
        'scoreCS'
      ],
      properties: {
        nameAddress: { $ref: '#/definitions/nameAddress' },
        legalForm: {
          type: 'string',
          description: 'Forma jur\u00eddica de la empresa'
        },
        registeredOffice: { $ref: '#/definitions/registeredOffice' },
        scoreCS: {
          type: 'number',
          description: 'Puntuaci\u00f3n CS',
          format: 'double'
        },
        orgIdent: { $ref: '#/definitions/orgIdent' },
        orgStatus: { $ref: '#/definitions/orgStatus' },
        activity: { $ref: '#/definitions/activity' }
      }
    },
    investDetail: {
      properties: {
        actos_borme: {
          type: 'object',
          properties: {
            textoCuentasBORME: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            nd: { type: 'string' },
            actos_inscritos: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      subActos: {
                        items: {
                          type: 'object',
                          properties: {
                            codigo: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      },
                      fechaPublicacion: { type: 'string' },
                      numeroSubActos: { type: 'number' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            deposito_cuentas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      codigoTipoCuenta: { type: 'string' },
                      fechaPublicacion: { type: 'string' },
                      anyoCuenta: { type: 'string' },
                      fechaDeposito: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        vinculaciones: {
          type: 'object',
          properties: {
            grupo_empresarial: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      tipoEmpresa: { type: 'string' },
                      nombre: {
                        type: 'object',
                        properties: {
                          nombre: { type: 'string' },
                          formaJuridica: { type: 'string' },
                          pais: { type: 'string' }
                        }
                      },
                      nif: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            participadas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      forma_juridica: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      tipo: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      directa: { type: 'string' },
                      nombre: { type: 'string' },
                      porcentaje: { type: 'string' },
                      nif: { type: 'string' },
                      indirecta: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            accionistas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      nombre: { type: 'string' },
                      nif: { type: 'string' },
                      forma_juridica: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      porcentaje: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            nd: { type: 'string' },
            inversiones: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      fecha: { type: 'string' },
                      partida: {
                        items: {
                          type: 'object',
                          properties: {
                            codigo: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  type: 'array'
                }
              }
            },
            unidades: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            moneda: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            operaciones: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      compra: { type: 'string' },
                      nombre: {
                        type: 'object',
                        properties: {
                          nombre: { type: 'string' },
                          formaJuridica: { type: 'string' },
                          pais: { type: 'string' }
                        }
                      },
                      venta: { type: 'string' },
                      nif: { type: 'string' },
                      tipo: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            socioUnico: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      nombre: { type: 'string' },
                      porcentaje: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            saldos_transacciones: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      transactionAmounts: {
                        type: 'object',
                        properties: {
                          interests: { type: 'string' },
                          saleOfCurrentAssets: { type: 'string' },
                          compensations: { type: 'string' },
                          purchaseOfCurrentAssets: { type: 'string' },
                          providedGuarantees: { type: 'string' },
                          saleOfNonCurrentAssets: { type: 'string' },
                          purchaseOfNonCurrentAssets: {
                            type: 'string'
                          },
                          renderedServices: { type: 'string' },
                          receivedGuarantees: { type: 'string' },
                          receivedServices: { type: 'string' }
                        }
                      },
                      businessInformation: {
                        type: 'object',
                        properties: {
                          acronym: {
                            type: 'object',
                            properties: {
                              code: { type: 'string' },
                              value: { type: 'string' }
                            }
                          },
                          country: {
                            type: 'object',
                            properties: {
                              code: { type: 'string' },
                              value: { type: 'string' }
                            }
                          },
                          fullName: { type: 'string' },
                          taxId: { type: 'string' }
                        }
                      }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        organos_sociales: {
          type: 'object',
          properties: {
            registro: {
              items: {
                type: 'object',
                properties: {
                  cargo: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  denominacion: { type: 'string' },
                  fecha: { type: 'string' }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        instalaciones: {
          type: 'object',
          properties: {
            otras: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      situacion: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      foto: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      descripcion_1: {
                        items: {
                          type: 'object',
                          properties: {
                            codigo: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      },
                      domicilio: {
                        type: 'object',
                        properties: {
                          poblacion: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          },
                          hasta_fecha: { type: 'string' },
                          tipovia: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          },
                          numero: { type: 'string' },
                          nombrevia: { type: 'string' },
                          codigopostal: { type: 'string' },
                          pais: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          },
                          restovia: { type: 'string' },
                          nucleo: { type: 'string' },
                          domicilioCompleto: { type: 'string' },
                          provincia: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          }
                        }
                      },
                      'incidencias-inst': { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            numero_instalaciones: { type: 'string' },
            nd: { type: 'string' },
            instalacion_principal: {
              type: 'object',
              properties: {
                nivel_stock: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                foto: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                grado_actividad: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                descripcion_1: {
                  items: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  type: 'array'
                },
                nivel_competencia: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                conocido_zona: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                situacion: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                incidencias: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    unavailabilityReason: { type: 'string' },
                    incidentDetails: {
                      items: {
                        type: 'object',
                        properties: {
                          impact: { type: 'string' },
                          dateTo: { type: 'string' },
                          dateFrom: { type: 'string' },
                          type: { type: 'string' }
                        }
                      },
                      type: 'array'
                    }
                  }
                },
                domicilio: {
                  type: 'object',
                  properties: {
                    poblacion: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    },
                    hasta_fecha: { type: 'string' },
                    tipovia: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    },
                    numero: { type: 'string' },
                    nombrevia: { type: 'string' },
                    codigopostal: { type: 'string' },
                    pais: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    },
                    restovia: { type: 'string' },
                    nucleo: { type: 'string' },
                    domicilioCompleto: { type: 'string' },
                    provincia: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        informacion_cuentas: {
          type: 'object',
          properties: {
            ejercicio: {
              items: {
                type: 'object',
                properties: {
                  modelo_cuentas: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  referencia: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  anyo: { type: 'string' },
                  periodo: { type: 'string' },
                  resultado: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  tipo_cuenta: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  auditadopor: { type: 'string' },
                  unidades: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  moneda: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  auditoria: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  salvedades: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        detalleInforme: {
          type: 'object',
          properties: {
            fechaUltDato: { type: 'string' },
            fechaEntrevista: { type: 'string' },
            textoFuentes: { type: 'string' },
            textoInformes: { type: 'string' },
            textoCuentas: { type: 'string' }
          }
        },
        cuentas: {
          type: 'object',
          properties: {
            nd: { type: 'string' },
            listado: {
              items: {
                type: 'object',
                properties: {
                  anyo: { type: 'string' },
                  listado: {
                    items: {
                      type: 'object',
                      properties: {
                        valorTraducido: { type: 'string' },
                        bloque: {
                          type: 'object',
                          properties: {
                            nivel: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        codigo: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  periodo: { type: 'string' }
                }
              },
              type: 'array'
            }
          }
        },
        marcas: {
          type: 'object',
          properties: {
            registros_nombres_comerciales: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      fecha_solicitud: { type: 'string' },
                      ruta_imagen: { type: 'string' },
                      fecha_renovacion: { type: 'string' },
                      claves_niza: {
                        type: 'object',
                        properties: {
                          registro: {
                            items: {
                              type: 'object',
                              properties: {
                                actividad: { type: 'string' },
                                clave: { type: 'string' }
                              }
                            },
                            type: 'array'
                          }
                        }
                      },
                      expediente: { type: 'string' },
                      calificador: { type: 'string' },
                      nombre: { type: 'string' },
                      fecha_actualizacion: { type: 'string' },
                      estado: { type: 'string' },
                      fecha_concesion: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            nd: { type: 'string' },
            registros_marcas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      fecha_solicitud: { type: 'string' },
                      ruta_imagen: { type: 'string' },
                      fecha_renovacion: { type: 'string' },
                      claves_niza: {
                        type: 'object',
                        properties: {
                          registro: {
                            items: {
                              type: 'object',
                              properties: {
                                actividad: { type: 'string' },
                                clave: { type: 'string' }
                              }
                            },
                            type: 'array'
                          }
                        }
                      },
                      expediente: { type: 'string' },
                      calificador: { type: 'string' },
                      nombre: { type: 'string' },
                      fecha_actualizacion: { type: 'string' },
                      estado: { type: 'string' },
                      fecha_concesion: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        datos_identificativos: {
          type: 'object',
          properties: {
            capital_social: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                importe: { type: 'string' }
              }
            },
            capital_desembolsado: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                importe: { type: 'string' }
              }
            },
            fax: { type: 'string' },
            incidencias_actividad: { type: 'string' },
            nif: { type: 'string' },
            operacion_mercantil: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                estado: { type: 'string' }
              }
            },
            datosident_grado_actividad: { type: 'string' },
            denominacion: { type: 'string' },
            forma_juridica: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            datosident_situacion: { type: 'string' },
            estado_firma: { type: 'string' },
            domicilio: { type: 'string' },
            web: { type: 'string' },
            domicilio_anterior: {
              type: 'object',
              properties: { domicilio: { type: 'string' } }
            },
            denominacion_anterior: { type: 'string' },
            tamanio_empresa: {
              type: 'object',
              properties: {
                codigo_cuenta: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            nombre_comercial: { type: 'string' },
            datosident_cnae: {
              type: 'object',
              properties: {
                descripcion: { type: 'string' },
                codigo: { type: 'string' },
                tipo: { type: 'string' }
              }
            },
            objeto_social: { type: 'string' },
            otras_situaciones: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                estado: { type: 'string' }
              }
            },
            fecha_inicio: { type: 'string' },
            situacion_mercantil: { type: 'string' },
            empleados: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      periodo: { type: 'string' },
                      anyo: { type: 'string' },
                      dif: { type: 'string' },
                      listado: {
                        items: {
                          type: 'object',
                          properties: {
                            situacion: { type: 'string' },
                            genero: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      },
                      valor: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            otras_actividades: {
              type: 'object',
              properties: {
                actividad: {
                  items: {
                    type: 'object',
                    properties: {
                      descripcion: { type: 'string' },
                      codigo: { type: 'string' },
                      tipo: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            situacion_concursal: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                estado: { type: 'string' }
              }
            },
            telefono: { type: 'string' }
          }
        },
        datos_economicos: {
          type: 'object',
          properties: {
            ejerciciosXml: {
              items: {
                type: 'object',
                properties: {
                  Resultado: { type: 'string' },
                  Endeudamiento_a_corto_plazo: { type: 'string' },
                  Fondo_de_Maniobra: { type: 'string' },
                  Endeudamiento_a_largo_plazo: { type: 'string' },
                  Total_Activo: { type: 'string' },
                  anyo: { type: 'string' },
                  modelo_cuentas: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  moneda: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  Free_Cash_Flow: { type: 'string' },
                  EBIT: { type: 'string' },
                  unidades: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  EBITDA: { type: 'string' },
                  Patrimonio_neto: { type: 'string' },
                  Ventas: { type: 'string' }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        ratios: {
          type: 'object',
          properties: {
            ejercicio_cuentas: {
              items: {
                type: 'object',
                properties: {
                  anyo: { type: 'string' },
                  registro: {
                    items: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        unidad: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    },
                    type: 'array'
                  }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        incidencias: {
          type: 'object',
          properties: {
            ejercicios: {
              items: {
                type: 'object',
                properties: {
                  demandado: {
                    type: 'object',
                    properties: {
                      eleTotalIncidenciaDemandado: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      judiciales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      concursales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      reclamaciones: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  },
                  anyo: { type: 'string' },
                  demandante: {
                    type: 'object',
                    properties: {
                      judiciales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      eleTotalIncidenciaDemandante: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      concursales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      reclamaciones: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  }
                }
              },
              type: 'array'
            },
            noDisponible: { type: 'string' },
            texto: { type: 'string' }
          }
        },
        otros_datos_actividad: {
          type: 'object',
          properties: {
            cartera_clientes: {
              type: 'object',
              properties: {
                empresa: {
                  items: {
                    type: 'object',
                    properties: {
                      denominacion: { type: 'string' },
                      provincia: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      pais: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      fuente: { type: 'string' },
                      nif: { type: 'string' },
                      sigla: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  },
                  type: 'array'
                },
                codigo: { type: 'string' },
                cartera_c: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                }
              }
            },
            numero_empleados: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                empleados: {
                  items: {
                    type: 'object',
                    properties: {
                      numero_E: {
                        items: {
                          type: 'object',
                          properties: {
                            valorTraducido: { type: 'string' },
                            codigo: { type: 'string' }
                          }
                        },
                        type: 'array'
                      },
                      anyo: { type: 'string' },
                      fuente: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  },
                  type: 'array'
                }
              }
            },
            cartera_proveedores: {
              type: 'object',
              properties: {
                empresa: {
                  items: {
                    type: 'object',
                    properties: {
                      denominacion: { type: 'string' },
                      provincia: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      pais: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      fuente: { type: 'string' },
                      nif: { type: 'string' },
                      sigla: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  },
                  type: 'array'
                },
                codigo: { type: 'string' },
                cartera_p: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                }
              }
            },
            exportacion_importacion: {
              items: {
                type: 'object',
                properties: {
                  exporta: { type: 'string' },
                  anyo: { type: 'string' },
                  importa: { type: 'string' },
                  fuente: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  unidad: { type: 'string' }
                }
              },
              type: 'array'
            },
            control_riesgo: {
              type: 'object',
              properties: {
                eleRiesgo: {
                  items: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            nd: { type: 'string' },
            bancos: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                sucursal: {
                  items: {
                    type: 'object',
                    properties: {
                      poblacion: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      agencia: { type: 'string' },
                      denominacion: { type: 'string' },
                      provincia: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      codigopostal: { type: 'string' },
                      direccion: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        valoracion: {
          type: 'object',
          properties: {
            morosidad: {
              type: 'object',
              properties: {
                regla_exclusion: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                definicion: { type: 'string' },
                escala: { type: 'string' }
              }
            },
            nd: { type: 'string' },
            opinion_credito: {
              type: 'object',
              properties: {
                valorTraducido: { type: 'string' },
                codigo: { type: 'string' }
              }
            },
            solvencia: { type: 'string' }
          }
        },
        sectorial: {
          type: 'object',
          properties: {
            numero_empresas: { type: 'string' },
            total_ventas: {
              type: 'object',
              properties: {
                unidades: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                moneda: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                valortotalventas: { type: 'string' }
              }
            },
            volumen_ventas: {
              type: 'object',
              properties: {
                unidades: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                moneda: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                valorvolumenventas: { type: 'string' }
              }
            },
            cuartiles: {
              type: 'object',
              properties: {
                totalNumeroEmpresas: { type: 'string' },
                cuartil: {
                  items: {
                    type: 'object',
                    properties: {
                      porcentaje_ventas: {
                        type: 'object',
                        properties: {
                          unidad: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          },
                          valorporcentajeventas: { type: 'string' }
                        }
                      },
                      pertenencia: { type: 'string' },
                      porcentaje_empresas: {
                        type: 'object',
                        properties: {
                          valorporcentajeempresas: { type: 'string' },
                          unidades: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          }
                        }
                      },
                      numero_empresas_C: { type: 'string' },
                      ventas_empresas: {
                        type: 'object',
                        properties: {
                          valorventasempresas: { type: 'string' },
                          unidades: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          },
                          moneda: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          }
                        }
                      },
                      codigo: { type: 'string' },
                      rango_ventas: {
                        type: 'object',
                        properties: {
                          unidades: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          },
                          valorRangoVentas: { type: 'string' },
                          moneda: {
                            type: 'object',
                            properties: {
                              codigo: { type: 'string' },
                              valor: { type: 'string' }
                            }
                          }
                        }
                      }
                    }
                  },
                  type: 'array'
                },
                totalPorcentajeEmpresas: { type: 'string' },
                totalVentasEmpresas: { type: 'string' },
                totalPorcentajeVentas: { type: 'string' }
              }
            },
            wrapperEjercicioCuentas: {
              type: 'object',
              properties: {
                ejerciciosXml: {
                  items: {
                    type: 'object',
                    properties: {
                      anyo: { type: 'string' },
                      listado: {
                        items: {
                          type: 'object',
                          properties: {
                            sector: { type: 'string' },
                            diferencial: {
                              type: 'object',
                              properties: {
                                valorString: { type: 'string' },
                                unidad: { type: 'string' }
                              }
                            },
                            empresa: { type: 'string' },
                            codigo: { type: 'string' }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  type: 'array'
                }
              }
            },
            nd: { type: 'string' },
            cnae: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"actos_borme":{"actos_inscritos":{"listado":[{"fechaPublicacion":"string","numeroSubActos":0,"subActos":[{"codigo":"string","valor":"string"}]}]},"deposito_cuentas":{"registro":[{"anyoCuenta":"string","codigoTipoCuenta":"string","fechaDeposito":"string","fechaPublicacion":"string"}]},"nd":"string","textoCuentasBORME":{"codigo":"string","valor":"string"}},"cuentas":{"listado":[{"anyo":"string","listado":[{"bloque":{"nivel":"string","valor":"string"},"codigo":"string","valorTraducido":"string"}],"periodo":"string"}],"nd":"string"},"datos_economicos":{"ejerciciosXml":[{"EBIT":"string","EBITDA":"string","Endeudamiento_a_corto_plazo":"string","Endeudamiento_a_largo_plazo":"string","Fondo_de_Maniobra":"string","Free_Cash_Flow":"string","Patrimonio_neto":"string","Resultado":"string","Total_Activo":"string","Ventas":"string","anyo":"string","modelo_cuentas":{"codigo":"string","valor":"string"},"moneda":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"}}],"nd":"string"},"datos_identificativos":{"capital_desembolsado":{"fecha":"string","importe":"string"},"capital_social":{"fecha":"string","importe":"string"},"datosident_cnae":{"codigo":"string","descripcion":"string","tipo":"string"},"datosident_grado_actividad":"string","datosident_situacion":"string","denominacion":"string","denominacion_anterior":"string","domicilio":"string","domicilio_anterior":{"domicilio":"string"},"empleados":{"listado":[{"anyo":"string","dif":"string","listado":[{"genero":"string","situacion":"string","valor":"string"}],"periodo":"string","valor":"string"}]},"estado_firma":"string","fax":"string","fecha_inicio":"string","forma_juridica":{"codigo":"string","valor":"string"},"incidencias_actividad":"string","nif":"string","nombre_comercial":"string","objeto_social":"string","operacion_mercantil":{"estado":"string","fecha":"string"},"otras_actividades":{"actividad":[{"codigo":"string","descripcion":"string","tipo":"string"}]},"otras_situaciones":{"estado":"string","fecha":"string"},"situacion_concursal":{"estado":"string","fecha":"string"},"situacion_mercantil":"string","tamanio_empresa":{"codigo_cuenta":"string","valor":"string"},"telefono":"string","web":"string"},"detalleInforme":{"fechaEntrevista":"string","fechaUltDato":"string","textoCuentas":"string","textoFuentes":"string","textoInformes":"string"},"incidencias":{"ejercicios":[{"anyo":"string","demandado":{"concursales":{"total":0,"valor":"string"},"eleTotalIncidenciaDemandado":{"total":0,"valor":"string"},"judiciales":{"total":0,"valor":"string"},"reclamaciones":{"total":0,"valor":"string"}},"demandante":{"concursales":{"total":0,"valor":"string"},"eleTotalIncidenciaDemandante":{"total":0,"valor":"string"},"judiciales":{"total":0,"valor":"string"},"reclamaciones":{"total":0,"valor":"string"}}}],"noDisponible":"string","texto":"string"},"informacion_cuentas":{"ejercicio":[{"anyo":"string","auditadopor":"string","auditoria":{"codigo":"string","valor":"string"},"modelo_cuentas":{"codigo":"string","valor":"string"},"moneda":{"codigo":"string","valor":"string"},"periodo":"string","referencia":{"codigo":"string","valor":"string"},"resultado":{"codigo":"string","valor":"string"},"salvedades":{"codigo":"string","valor":"string"},"tipo_cuenta":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"}}],"nd":"string"},"instalaciones":{"instalacion_principal":{"conocido_zona":{"codigo":"string","valor":"string"},"descripcion_1":[{"codigo":"string","valor":"string"}],"domicilio":{"codigopostal":"string","domicilioCompleto":"string","hasta_fecha":"2019-10-07T07:17:17.735Z","nombrevia":"string","nucleo":"string","numero":"string","pais":{"codigo":"string","valor":"string"},"poblacion":{"codigo":"string","valor":"string"},"provincia":{"codigo":"string","valor":"string"},"restovia":"string","tipovia":{"codigo":"string","valor":"string"}},"foto":{"codigo":"string","valor":"string"},"grado_actividad":{"codigo":"string","valor":"string"},"incidencias":{"code":"string","incidentDetails":[{"dateFrom":"string","dateTo":"string","impact":"string","type":"string"}],"unavailabilityReason":"string"},"nivel_competencia":{"codigo":"string","valor":"string"},"nivel_stock":{"codigo":"string","valor":"string"},"situacion":{"codigo":"string","valor":"string"}},"nd":"string","numero_instalaciones":"string","otras":{"listado":[{"descripcion_1":[{"codigo":"string","valor":"string"}],"domicilio":{"codigopostal":"string","domicilioCompleto":"string","hasta_fecha":"2019-10-07T07:17:17.735Z","nombrevia":"string","nucleo":"string","numero":"string","pais":{"codigo":"string","valor":"string"},"poblacion":{"codigo":"string","valor":"string"},"provincia":{"codigo":"string","valor":"string"},"restovia":"string","tipovia":{"codigo":"string","valor":"string"}},"foto":{"codigo":"string","valor":"string"},"incidencias-inst":"string","situacion":{"codigo":"string","valor":"string"}}]}},"marcas":{"nd":"string","registros_marcas":{"registro":[{"calificador":"string","claves_niza":{"registro":[{"actividad":"string","clave":"string"}]},"estado":"string","expediente":"string","fecha_actualizacion":"string","fecha_concesion":"string","fecha_renovacion":"string","fecha_solicitud":"string","nombre":"string","ruta_imagen":"string"}]},"registros_nombres_comerciales":{"registro":[{"calificador":"string","claves_niza":{"registro":[{"actividad":"string","clave":"string"}]},"estado":"string","expediente":"string","fecha_actualizacion":"string","fecha_concesion":"string","fecha_renovacion":"string","fecha_solicitud":"string","nombre":"string","ruta_imagen":"string"}]}},"organos_sociales":{"nd":"string","registro":[{"cargo":{"codigo":"string","valor":"string"},"denominacion":"string","fecha":"string"}]},"otros_datos_actividad":{"bancos":{"codigo":"string","sucursal":[{"agencia":"string","codigopostal":"string","denominacion":"string","direccion":"string","poblacion":{"codigo":"string","valor":"string"},"provincia":{"codigo":"string","valor":"string"}}]},"cartera_clientes":{"cartera_c":{"codigo":"string","valor":"string"},"codigo":"string","empresa":[{"denominacion":"string","fuente":"string","nif":"string","pais":{"codigo":"string","valor":"string"},"provincia":{"codigo":"string","valor":"string"},"sigla":{"codigo":"string","valor":"string"}}]},"cartera_proveedores":{"cartera_p":{"codigo":"string","valor":"string"},"codigo":"string","empresa":[{"denominacion":"string","fuente":"string","nif":"string","pais":{"codigo":"string","valor":"string"},"provincia":{"codigo":"string","valor":"string"},"sigla":{"codigo":"string","valor":"string"}}]},"control_riesgo":{"eleRiesgo":[{"codigo":"string","valor":"string"}]},"exportacion_importacion":[{"anyo":"string","exporta":"string","fuente":{"codigo":"string","valor":"string"},"importa":"string","unidad":"string"}],"nd":"string","numero_empleados":{"codigo":"string","empleados":[{"anyo":"string","fuente":{"codigo":"string","valor":"string"},"numero_E":[{"codigo":"string","valorTraducido":"string"}]}]}},"ratios":{"ejercicio_cuentas":[{"anyo":"string","registro":[{"codigo":"string","unidad":"string","valor":"string"}]}],"nd":"string"},"sectorial":{"cnae":{"codigo":"string","valor":"string"},"cuartiles":{"cuartil":[{"codigo":"string","numero_empresas_C":"string","pertenencia":"string","porcentaje_empresas":{"unidades":{"codigo":"string","valor":"string"},"valorporcentajeempresas":"string"},"porcentaje_ventas":{"unidad":{"codigo":"string","valor":"string"},"valorporcentajeventas":"string"},"rango_ventas":{"moneda":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"},"valorRangoVentas":"string"},"ventas_empresas":{"moneda":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"},"valorventasempresas":"string"}}],"totalNumeroEmpresas":"string","totalPorcentajeEmpresas":"string","totalPorcentajeVentas":"string","totalVentasEmpresas":"string"},"nd":"string","numero_empresas":"string","total_ventas":{"moneda":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"},"valortotalventas":"string"},"volumen_ventas":{"moneda":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"},"valorvolumenventas":"string"},"wrapperEjercicioCuentas":{"ejerciciosXml":[{"anyo":"string","listado":[{"codigo":"string","diferencial":{"unidad":"string","valorString":"string"},"empresa":"string","sector":"string"}]}]}},"valoracion":{"morosidad":{"definicion":"string","escala":"string","regla_exclusion":{"codigo":"string","valor":"string"}},"nd":"string","opinion_credito":{"codigo":"string","valorTraducido":"string"},"solvencia":"string"},"vinculaciones":{"accionistas":{"registro":[{"forma_juridica":{"codigo":"string","valor":"string"},"nif":"string","nombre":"string","porcentaje":"string"}]},"grupo_empresarial":{"registro":[{"nif":"string","nombre":{"formaJuridica":"string","nombre":"string","pais":"string"},"tipoEmpresa":"string"}]},"inversiones":{"listado":[{"fecha":"string","partida":[{"codigo":"string","valor":"string"}]}]},"moneda":{"codigo":"string","valor":"string"},"nd":"string","operaciones":{"registro":[{"compra":"string","nif":"string","nombre":{"formaJuridica":"string","nombre":"string","pais":"string"},"tipo":"string","venta":"string"}]},"participadas":{"registro":[{"directa":"string","forma_juridica":{"codigo":"string","valor":"string"},"indirecta":"string","nif":"string","nombre":"string","porcentaje":"string","tipo":{"codigo":"string","valor":"string"}}]},"saldos_transacciones":{"registro":[{"businessInformation":{"acronym":{"code":"string","value":"string"},"country":{"code":"string","value":"string"},"fullName":"string","taxId":"string"},"transactionAmounts":{"compensations":"string","interests":"string","providedGuarantees":"string","purchaseOfCurrentAssets":"string","purchaseOfNonCurrentAssets":"string","receivedGuarantees":"string","receivedServices":"string","renderedServices":"string","saleOfCurrentAssets":"string","saleOfNonCurrentAssets":"string"}}]},"socioUnico":{"registro":[{"nombre":"string","porcentaje":"string"}]},"unidades":{"codigo":"string","valor":"string"}}}',
      description: ''
    },
    awardee: {
      properties: {
        country: { type: 'string' },
        identifier: { type: 'string' },
        name: { type: 'string' },
        identifierType: { type: 'string' }
      },
      type: 'object',
      example:
        '{"identifier":"string","identifierType":"string","name":"string","country":"string"}',
      description: ''
    },
    cpvDetails: {
      properties: {
        code: { type: 'string' },
        description: { type: 'string' }
      },
      type: 'object',
      example:
        '{"code":"03000000","description":"Agricultural, farming, fishing, forestry and related products"}',
      description: ''
    },
    registeredOffice: {
      required: ['registeredOfficeCode', 'registeredOfficeType'],
      properties: {
        registeredOfficeCode: {
          type: 'string',
          description: 'C\u00f3digo de oficina'
        },
        registeredOfficeType: {
          type: 'string',
          description: 'Tipo de oficina'
        }
      }
    },
    bankruptcyIDDetail: {
      properties: {
        courtType: { type: 'string' },
        rating: { type: 'string' },
        assetsAmount: { type: 'string' },
        proceeding: { type: 'string' },
        orderNumber: { type: 'string' },
        defendants: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        },
        courtNumber: { type: 'number' },
        status: { type: 'string' },
        publications: {
          items: {
            type: 'object',
            properties: {
              media: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              datePublished: { type: 'string' }
            }
          },
          type: 'array'
        },
        proceedingDate: { type: 'string' },
        statusDate: { type: 'string' },
        liabilitiesAmount: { type: 'string' },
        plaintiffs: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        },
        statusHistory: {
          items: {
            type: 'object',
            properties: {
              fecha: { type: 'string' },
              estado: { type: 'string' }
            }
          },
          type: 'array'
        },
        courtTown: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        }
      },
      type: 'object',
      example:
        '{"assetsAmount":"string","courtNumber":0,"courtTown":{"code":"string","value":"string"},"courtType":"string","defendants":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-07T08:03:39.235Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"liabilitiesAmount":"string","orderNumber":"string","plaintiffs":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-07T08:03:39.235Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"proceeding":"string","proceedingDate":"string","publications":[{"datePublished":"string","media":{"code":"string","value":"string"}}],"rating":"string","status":"string","statusDate":"string","statusHistory":[{"estado":"string","fecha":"string"}]}',
      description: ''
    },
    SalDetail: {
      properties: {
        documentLink: { type: 'string' },
        currentYearSales: {
          type: 'object',
          properties: {
            dateToPartialSales: { type: 'string' },
            dateFromPartialSales: { type: 'string' },
            annualSales: {
              type: 'object',
              properties: {
                indicator: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                expectedAnnualSales: { type: 'string' }
              }
            },
            partialSales: { type: 'string' }
          }
        },
        previousYearSales: {
          type: 'object',
          properties: {
            amount: { type: 'string' },
            valor: { type: 'string' },
            year: { type: 'string' }
          }
        },
        period: { type: 'string' },
        salesAssociatedCompanies: { type: 'string' },
        notAvailable: { type: 'string' },
        year: { type: 'string' },
        units: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        closeDate: { type: 'string' },
        salesTrend: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        }
      },
      type: 'object',
      example:
        '{"closeDate":"string","currentYearSales":{"annualSales":{"expectedAnnualSales":"string","indicator":{"code":"string","value":"string"}},"dateFromPartialSales":"string","dateToPartialSales":"string","partialSales":"string"},"documentLink":"string","notAvailable":"string","period":"string","previousYearSales":{"amount":"string","valor":"string","year":"string"},"salesAssociatedCompanies":"string","salesTrend":{"code":"string","value":"string"},"units":{"code":"string","value":"string"},"year":"string"}',
      description: ''
    },
    awarder: {
      properties: {
        division: { type: 'string' },
        name: { type: 'string' },
        country: { type: 'string' },
        nut: { type: 'string' },
        divisionLevel2: { type: 'string' },
        divisionLevel1: { type: 'string' },
        divisionLevel3: { type: 'string' },
        identifierType: { type: 'string' },
        identifier: { type: 'string' },
        adminType: { type: 'string' },
        id: { type: 'string' }
      },
      type: 'object',
      example:
        '{"id":"string","adminType":"string","division":"string","divisionLevel1":"string","divisionLevel2":"string","divisionLevel3":"string","identifier":"string","identifierType":"string","name":"string","country":"string","nut":"string"}',
      description: ''
    },
    activityIncidentDetail: {
      properties: {
        notAvailable: { type: 'string' },
        incidents: {
          items: {
            type: 'object',
            properties: {
              impact: { type: 'string' },
              dateTo: { type: 'string' },
              dateFrom: { type: 'string' },
              type: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{\n  "incidents": [\n    {\n      "dateFrom": "string",\n      "dateTo": "string",\n      "impact": "string",\n      "type": "string"\n    }\n  ],\n  "notAvailable": "string"\n}',
      description: ''
    },
    alertDetails: {
      items: {
        type: 'object',
        properties: {
          tender: {
            type: 'object',
            properties: {
              tenderSource: { type: 'string' },
              endDate: { type: 'string' },
              description: { type: 'string' },
              cpvDescriptionES: { type: 'string' },
              cpvDescriptionEN: {},
              date: { type: 'string' },
              contractType: { type: 'string' },
              id: { type: 'number' },
              title: { type: 'string' },
              country: { type: 'string' },
              budget: { type: 'string' },
              record: { type: 'string' },
              cpv: { type: 'string' },
              organism: { type: 'string' },
              tenderState: { type: 'string' },
              cpvDescriptionPT: {}
            }
          },
          alert: {
            type: 'object',
            properties: {
              sendEmailStatus: { type: 'boolean' },
              userId: { type: 'string' },
              id: { type: 'number' },
              tenderId: { type: 'string' },
              statusDate: { type: 'string' },
              subscriptionId: { type: 'string' },
              creationDate: { type: 'string' },
              apiQueried: { type: 'boolean' }
            }
          }
        }
      },
      type: 'array',
      description: '',
      example:
        '[{"alert":{"id":1465,"creationDate":"10/10/2019","statusDate":"10/10/2019","userId":"255","tenderId":"3337405","subscriptionId":"48","sendEmailStatus":false,"apiQueried":false},"tender":{"id":3337405,"date":"31/10/2019","record":"CON 7/2019 BIS","organism":"Junta de Gobierno Local del Ayuntamiento de Arcos de Jal\u00f3n","title":"Terminaci\u00f3n  \u2122 \u00ae \u00aa \u00ba de la mejora de la captaci\u00f3n, distribuci\u00f3n e impulsi\u00f3n de la tuber\u00eda de abastecimiento de agua","description":"Id licitaci\u00f3n: CON 7/2019 BIS; \u00d3rgano de Contrataci\u00f3n: Junta de Gobierno Local del Ayuntamiento de Arcos de Jal\u00f3n; Importe: 80165.29 EUR; Estado: ADJ","budget":"97000.00","endDate":"20/11/2019","cpv":"45232100, 45000000","contractType":"Obras","country":"424","tenderSource":"Contrataci\u00f3n del Estado","tenderState":"Adjudicada","cpvDescriptionEN":null,"cpvDescriptionES":"Trabajos de construcci\u00f3n | Obras auxiliares para tuber\u00edas de agua","cpvDescriptionPT":null}},{"alert":{"id":1466,"creationDate":"10/10/2019","statusDate":"10/10/2019","userId":"255","tenderId":"3337406","subscriptionId":"48","sendEmailStatus":false,"apiQueried":false},"tender":{"id":3337406,"date":"31/10/2019","record":"CON/37/2019","organism":"Alcald\u00eda del Ayuntamiento de Aller","title":"prestaci\u00f3n de los servicios que se detallan a continuaci\u00f3n: alquiler y montaje, servicios audiovisuales, servicio de vigilancia y servicio de elaboraci\u00f3n plan de autoprotecci\u00f3n del recinto ferial de Nevaria 2019, la feria de la nieve y la monta\u00f1a","description":"Id licitaci\u00f3n: CON/37/2019; \u00d3rgano de Contrataci\u00f3n: Alcald\u00eda del Ayuntamiento de Aller; Importe: 38030.02 EUR; Estado: ADJ","budget":"46016.33","endDate":"18/11/2019","cpv":"79950000","contractType":"Servicios","country":"424","tenderSource":"Contrataci\u00f3n del Estado","tenderState":"Adjudicada","cpvDescriptionEN":null,"cpvDescriptionES":"Servicios de organizaci\u00f3n de exposiciones, ferias y congresos","cpvDescriptionPT":null}}]'
    },
    ranking: {
      properties: {
        units: { type: 'string' },
        rankingID: { type: 'string' },
        limit: { type: 'number' },
        description: { type: 'string' },
        order: { type: 'string' }
      },
      type: 'object',
      example:
        '{"rankingID":"01","description":"Ventas","units":"Euros","order":"desc","limit":1000}',
      description: ''
    },
    OFADetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              workingCapital: { type: 'string' },
              reservations: { type: 'string' },
              employees: { type: 'string' },
              equity: { type: 'string' },
              sales: { type: 'string' },
              period: { type: 'string' },
              result: { type: 'string' },
              year: { type: 'string' },
              shortTermDebt: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"employees":"string","equity":"string","period":"string","reservations":"string","result":"string","sales":"string","shortTermDebt":"string","workingCapital":"string","year":"string"}]}',
      description: ''
    },
    responseGetOrganisationByKey: {
      properties: {
        count: { type: 'number' },
        organisations: {
          items: {
            type: 'object',
            properties: {
              nameAddress: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  address: {
                    type: 'object',
                    properties: {
                      country: { type: 'string' },
                      street: { type: 'string' },
                      postCode: { type: 'string' },
                      countrySubident: { type: 'string' },
                      city: { type: 'string' }
                    }
                  }
                }
              },
              legalForm: { type: 'string' },
              registeredOffice: {
                type: 'object',
                properties: {
                  registeredOfficeCode: { type: 'string' },
                  registeredOfficeType: { type: 'string' }
                }
              },
              scoreCS: { type: 'number' },
              orgIdent: {
                type: 'object',
                properties: {
                  orgIdentStrId: {},
                  orgIdentType: { type: 'string' },
                  orgIdentId: { type: 'number' }
                }
              },
              orgStatus: {
                type: 'object',
                properties: {
                  statusDate: { type: 'string' },
                  statusDesc: { type: 'string' },
                  statusCode: { type: 'string' }
                }
              },
              activity: {
                type: 'object',
                properties: {
                  activityClassVersion: { type: 'string' },
                  activityClassCode: { type: 'string' },
                  activityClassType: { type: 'string' },
                  activityClassDesc: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        },
        baseRequest: {
          type: 'object',
          properties: {
            lang: { type: 'string' },
            user: { type: 'string' }
          }
        }
      },
      type: 'object',
      example:
        '{"count":1,"baseRequest":{"user":"","lang":"ES"},"organisations":[{"scoreCS":0,"activity":{"activityClassType":"CNAE","activityClassVersion":"2009","activityClassCode":"4776","activityClassDesc":"Comercio al por menor de flores, plantas, semillas, fertilizantes, animales de compa\u00f1\u00eda y alimentos para los mismos en establecimientos especializados "},"legalForm":"SL","nameAddress":{"name":"ERICA GARDEN FLORISTERIA SL","address":{"street":"PLAZA DEL DOCTOR LAGUNA 2","city":"MADRID","postCode":"28009","countrySubident":"MADRID","country":"ESPA\u00d1A"}},"orgIdent":{"orgIdentType":"IBER","orgIdentId":7600,"orgIdentStrId":null},"orgStatus":{"statusCode":"0","statusDate":"01/01/0001","statusDesc":"N/A"},"registeredOffice":{"registeredOfficeType":"NREG","registeredOfficeCode":"B81548166"}}]}',
      description: ''
    },
    consolidatedFinancialRatiosDetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              ratios: {
                type: 'object',
                properties: {
                  items: {
                    items: {
                      type: 'object',
                      properties: {
                        unit: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        value: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"},"ratios":{"items":[{"description":{"code":"string","value":"string"},"unit":{"code":"string","value":"string"},"value":"string"}],"unavailabilityReason":"string"}}]}',
      description: ''
    },
    ErrorDetail: {
      additionalProperties: false,
      properties: {
        status: { type: 'number', format: 'int32' },
        message: { type: 'string' },
        code: { type: 'string' },
        'propiedad-nueva-1': { type: 'string' },
        principal: { type: 'string' }
      },
      type: 'object',
      example:
        '{"code":"string","message":"string","principal":"string","status":0}',
      description: ''
    },
    EvaluationEODetail: {
      properties: {
        morosidad: {
          type: 'object',
          properties: {
            regla_exclusion: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            definicion: { type: 'string' },
            escala: { type: 'string' }
          }
        },
        nd: { type: 'string' },
        opinion_credito: {
          type: 'object',
          properties: {
            valorTraducido: { type: 'string' },
            codigo: { type: 'string' }
          }
        },
        solvencia: { type: 'string' }
      },
      type: 'object',
      example:
        '{"morosidad":{"definicion":"string","escala":"string","regla_exclusion":{"codigo":"string","valor":"string"}},"nd":"string","opinion_credito":{"codigo":"string","valorTraducido":"string"},"solvencia":"string"}',
      description: ''
    },
    BanksDetails: {
      properties: {
        banks: {
          items: {
            type: 'object',
            properties: {
              province: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              cityTown: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              name: { type: 'string' },
              branch: { type: 'string' },
              address: { type: 'string' },
              agency: { type: 'string' },
              postcode: { type: 'string' }
            }
          },
          type: 'array'
        },
        notAvailable: { type: 'string' },
        notProvided: { type: 'string' }
      },
      type: 'object',
      example:
        '{"banks":[{"address":"string","agency":"string","branch":"string","cityTown":{"code":"string","value":"string"},"name":"string","postcode":"string","province":{"code":"string","value":"string"}}],"notAvailable":"string","notProvided":"string"}',
      description: ''
    },
    CCFDetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              accountsWrapper: {
                type: 'object',
                properties: {
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"accountsWrapper":{"accounts":[{"balance":"string","description":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"}}]}',
      description: ''
    },
    subscriptionsAlertDetails: {
      items: {
        type: 'object',
        properties: {
          filter: { type: 'string' },
          type: { type: 'string' },
          value: {}
        }
      },
      type: 'array',
      description: '',
      example:
        '[{"filter":"Text","type":"Text","value":null},{"filter":"Cpv","type":"List<Values>","value":"REST"},{"filter":"Country","type":"List<Values>","value":"REST"},{"filter":"Maximum Amount","type":"Integer","value":null},{"filter":"Minimum Amount","type":"Integer","value":null}]'
    },
    RCEDetail: {
      properties: {
        notAvailable: { type: 'string' },
        controlEntity: { type: 'string' },
        riskItems: {
          items: {
            type: 'object',
            properties: {
              code: { type: 'string' },
              value: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"controlEntity":"string","notAvailable":"string","riskItems":[{"code":"string","value":"string"}]}',
      description: ''
    },
    alertsDetails: {
      properties: {
        totalAlerts: { type: 'number' },
        alerts: {
          items: {
            type: 'object',
            properties: {
              typeId: { type: 'number' },
              id: { type: 'string' },
              payload: {
                type: 'object',
                properties: {
                  previousDescription: {},
                  currentDescription: { type: 'string' },
                  currentValue: { type: 'string' },
                  previousValue: {},
                  companyId: { type: 'number' },
                  changeDate: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        },
        contractId: { type: 'number' }
      },
      type: 'object',
      example:
        '{"contractId":107238,"alerts":[{"id":"PdRB","typeId":2,"payload":{"companyId":3108923,"previousValue":null,"previousDescription":null,"currentValue":"0113","currentDescription":"CULTIVO DE HORTALIZAS RAICES Y TUBERCULOS","changeDate":"2020-12-363 15:46:23"}},{"id":"YnBw","typeId":4,"payload":{"companyId":3108923,"previousValue":null,"previousDescription":null,"currentValue":"33","currentDescription":"SLL","changeDate":"2020-12-363 15:46:23"}},{"id":"ZaOW","typeId":5,"payload":{"companyId":3108923,"previousValue":null,"previousDescription":null,"currentValue":"COLCHONES SANTA ANA","currentDescription":"","changeDate":"2020-12-363 15:46:23"}},{"id":"nlgj","typeId":3,"payload":{"companyId":3108923,"previousValue":null,"previousDescription":null,"currentValue":"916589632","currentDescription":"","changeDate":"2020-12-363 15:46:23"}},{"id":"a2KN","typeId":2,"payload":{"companyId":3639441,"previousValue":"0115","previousDescription":"CULTIVO DE TABACO","currentValue":"0116","currentDescription":"CULTIVO DE PLANTAS PARA FIBRAS TEXTILES","changeDate":"2020-12-363 16:55:29"}},{"id":"mjgX","typeId":2,"payload":{"companyId":7195876,"previousValue":"0113","previousDescription":"CULTIVO DE HORTALIZAS RAICES Y TUBERCULOS","currentValue":"0115","currentDescription":"CULTIVO DE TABACO","changeDate":"2020-12-363 16:55:29"}},{"id":"QKM1","typeId":2,"payload":{"companyId":7201224,"previousValue":"0116","previousDescription":"CULTIVO DE PLANTAS PARA FIBRAS TEXTILES","currentValue":"0114","currentDescription":"CULTIVO DE CA\ufffdA DE AZUCAR","changeDate":"2020-12-363 16:55:29"}}],"totalAlerts":7}',
      description: ''
    },
    LeProcIDDetail: {
      properties: {
        courtType: { type: 'string' },
        rating: { type: 'string' },
        orderNumber: { type: 'string' },
        proceedingDate: { type: 'string' },
        claimed: { type: 'string' },
        proceeding: { type: 'string' },
        statusHistory: {
          items: {
            type: 'object',
            properties: {
              fecha: { type: 'string' },
              estado: { type: 'string' }
            }
          },
          type: 'array'
        },
        defendants: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        },
        embargoed: { type: 'string' },
        embargoedAddress: {
          items: {
            type: 'object',
            properties: {
              homeValuation: { type: 'string' },
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        },
        courtTown: { type: 'string' },
        courtNumber: { type: 'number' },
        status: { type: 'string' },
        publications: {
          items: {
            type: 'object',
            properties: {
              media: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              datePublished: { type: 'string' }
            }
          },
          type: 'array'
        },
        statusDate: { type: 'string' },
        plaintiffs: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"claimed":"string","courtNumber":0,"courtTown":"string","courtType":"string","defendants":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-04T07:42:08.674Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"embargoed":"string","embargoedAddress":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-04T07:42:08.674Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"homeValuation":"string"}],"orderNumber":"string","plaintiffs":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-04T07:42:08.674Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"proceeding":"string","proceedingDate":"string","publications":[{"datePublished":"string","media":{"code":"string","value":"string"}}],"rating":"string","status":"string","statusDate":"string","statusHistory":[{"estado":"string","fecha":"string"}]}',
      description: ''
    },
    alertsTypePayloadDetails: {
      properties: {
        numRegs: { type: 'number' },
        changeDate: { type: 'string' },
        fileName: { type: 'string' }
      },
      type: 'object',
      example:
        '{"fileName":"Massive alert file name","numRegs":0,"changeDate":"2020-02-58 13:26:53"}',
      description: ''
    },
    subscriptionsDetails: {
      items: {
        type: 'object',
        properties: {
          cpvs: { type: 'string' },
          language: { type: 'string' },
          minAmount: { type: 'number' },
          userId: { type: 'number' },
          id: { type: 'number' },
          alias: { type: 'string' },
          query: { type: 'string' },
          scope: { type: 'string' },
          email: { type: 'string' },
          maxAmount: { type: 'number' }
        }
      },
      type: 'array',
      description: '',
      example:
        '[{"id":4,"userId":255,"query":"ministerio","scope":"","cpvs":"45000000","minAmount":5,"maxAmount":2000000,"email":"email@email.com","alias":"alias","language":"es"},{"id":46,"userId":255,"query":"Hospitalar","scope":"","cpvs":"","minAmount":0,"maxAmount":null,"email":"email@email.com","alias":"Hospitalar","language":"es"},{"id":47,"userId":255,"query":"seguros","scope":"","cpvs":"","minAmount":5,"maxAmount":null,"email":"email@email.com","alias":"seguros","language":"es"},{"id":48,"userId":255,"query":"maderas","scope":"","cpvs":"","minAmount":5,"maxAmount":null,"email":"email@email.com","alias":"maderas","language":"es"},{"id":49,"userId":255,"query":"Madrid","scope":"","cpvs":"45000000","minAmount":5,"maxAmount":null,"email":"dbarcenam@creditoycaucion.es","alias":"Construction work en Madrid","language":"es"},{"id":50,"userId":255,"query":"seguros","scope":"226,424","cpvs":"03111400","minAmount":5,"maxAmount":20,"email":"email@email.com","alias":"subscripci\u00f3n a limpieza","language":"es"},{"id":51,"userId":255,"query":"seguros","scope":"226,424","cpvs":"03111400","minAmount":5,"maxAmount":20,"email":"email@email.com","alias":"subscripci\u00f3n a limpieza","language":"es"}]'
    },
    internal_Content: {
      properties: {
        province: { type: 'string' },
        name: { type: 'string' },
        webDescription: { type: 'string' },
        locality: { type: 'string' },
        country: { type: 'string' },
        firmId: { type: 'number' },
        rankingValue: { type: 'string' },
        tradeName: { type: 'string' },
        fullName: { type: 'string' }
      },
      type: 'object',
      example:
        '{"firmId":63770,"webDescription":"mercadona","name":"MERCADONA","fullName":"MERCADONA SA","tradeName":"MERCADONA","country":"ESPA\u00d1A","province":"VALENCIA","locality":"TAVERNES BLANQUES","rankingValue":" 23.343.778.000,00"}',
      description: ''
    },
    iberDetail: {
      properties: {
        actos_borme: {
          type: 'object',
          properties: {
            textoCuentasBORME: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            nd: { type: 'string' },
            actos_inscritos: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      subActos: {
                        items: {
                          type: 'object',
                          properties: {
                            codigo: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      },
                      fechaPublicacion: { type: 'string' },
                      numeroSubActos: { type: 'number' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            deposito_cuentas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      codigoTipoCuenta: { type: 'string' },
                      fechaPublicacion: { type: 'string' },
                      anyoCuenta: { type: 'string' },
                      fechaDeposito: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        vinculaciones: {
          type: 'object',
          properties: {
            grupo_empresarial: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      tipoEmpresa: { type: 'string' },
                      nombre: {
                        type: 'object',
                        properties: {
                          nombre: { type: 'string' },
                          formaJuridica: { type: 'string' },
                          pais: { type: 'string' }
                        }
                      },
                      nif: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            participadas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      forma_juridica: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      tipo: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      directa: { type: 'string' },
                      nombre: { type: 'string' },
                      porcentaje: { type: 'string' },
                      nif: { type: 'string' },
                      indirecta: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            accionistas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      nombre: { type: 'string' },
                      nif: { type: 'string' },
                      forma_juridica: {
                        type: 'object',
                        properties: {
                          codigo: { type: 'string' },
                          valor: { type: 'string' }
                        }
                      },
                      porcentaje: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            nd: { type: 'string' },
            inversiones: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      fecha: { type: 'string' },
                      partida: {
                        items: {
                          type: 'object',
                          properties: {
                            codigo: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  type: 'array'
                }
              }
            },
            unidades: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            moneda: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            operaciones: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      compra: { type: 'string' },
                      nombre: {
                        type: 'object',
                        properties: {
                          nombre: { type: 'string' },
                          formaJuridica: { type: 'string' },
                          pais: { type: 'string' }
                        }
                      },
                      venta: { type: 'string' },
                      nif: { type: 'string' },
                      tipo: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            socioUnico: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      nombre: { type: 'string' },
                      porcentaje: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            saldos_transacciones: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      transactionAmounts: {
                        type: 'object',
                        properties: {
                          interests: { type: 'string' },
                          saleOfCurrentAssets: { type: 'string' },
                          compensations: { type: 'string' },
                          purchaseOfCurrentAssets: { type: 'string' },
                          providedGuarantees: { type: 'string' },
                          saleOfNonCurrentAssets: { type: 'string' },
                          purchaseOfNonCurrentAssets: {
                            type: 'string'
                          },
                          renderedServices: { type: 'string' },
                          receivedGuarantees: { type: 'string' },
                          receivedServices: { type: 'string' }
                        }
                      },
                      businessInformation: {
                        type: 'object',
                        properties: {
                          acronym: {
                            type: 'object',
                            properties: {
                              code: { type: 'string' },
                              value: { type: 'string' }
                            }
                          },
                          country: {
                            type: 'object',
                            properties: {
                              code: { type: 'string' },
                              value: { type: 'string' }
                            }
                          },
                          fullName: { type: 'string' },
                          taxId: { type: 'string' }
                        }
                      }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        organos_sociales: {
          type: 'object',
          properties: {
            registro: {
              items: {
                type: 'object',
                properties: {
                  cargo: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  denominacion: { type: 'string' },
                  fecha: { type: 'string' }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        informacion_cuentas: {
          type: 'object',
          properties: {
            ejercicio: {
              items: {
                type: 'object',
                properties: {
                  modelo_cuentas: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  referencia: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  anyo: { type: 'string' },
                  periodo: { type: 'string' },
                  resultado: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  tipo_cuenta: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  auditadopor: { type: 'string' },
                  unidades: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  moneda: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  auditoria: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  salvedades: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        detalleInforme: {
          type: 'object',
          properties: {
            fechaUltDato: { type: 'string' },
            fechaEntrevista: { type: 'string' },
            textoFuentes: { type: 'string' },
            textoInformes: { type: 'string' },
            textoCuentas: { type: 'string' }
          }
        },
        cuentas: {
          type: 'object',
          properties: {
            nd: { type: 'string' },
            listado: {
              items: {
                type: 'object',
                properties: {
                  anyo: { type: 'string' },
                  listado: {
                    items: {
                      type: 'object',
                      properties: {
                        valorTraducido: { type: 'string' },
                        bloque: {
                          type: 'object',
                          properties: {
                            nivel: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        codigo: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  periodo: { type: 'string' }
                }
              },
              type: 'array'
            }
          }
        },
        marcas: {
          type: 'object',
          properties: {
            registros_nombres_comerciales: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      fecha_solicitud: { type: 'string' },
                      ruta_imagen: { type: 'string' },
                      fecha_renovacion: { type: 'string' },
                      claves_niza: {
                        type: 'object',
                        properties: {
                          registro: {
                            items: {
                              type: 'object',
                              properties: {
                                actividad: { type: 'string' },
                                clave: { type: 'string' }
                              }
                            },
                            type: 'array'
                          }
                        }
                      },
                      expediente: { type: 'string' },
                      calificador: { type: 'string' },
                      nombre: { type: 'string' },
                      fecha_actualizacion: { type: 'string' },
                      estado: { type: 'string' },
                      fecha_concesion: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            nd: { type: 'string' },
            registros_marcas: {
              type: 'object',
              properties: {
                registro: {
                  items: {
                    type: 'object',
                    properties: {
                      fecha_solicitud: { type: 'string' },
                      ruta_imagen: { type: 'string' },
                      fecha_renovacion: { type: 'string' },
                      claves_niza: {
                        type: 'object',
                        properties: {
                          registro: {
                            items: {
                              type: 'object',
                              properties: {
                                actividad: { type: 'string' },
                                clave: { type: 'string' }
                              }
                            },
                            type: 'array'
                          }
                        }
                      },
                      expediente: { type: 'string' },
                      calificador: { type: 'string' },
                      nombre: { type: 'string' },
                      fecha_actualizacion: { type: 'string' },
                      estado: { type: 'string' },
                      fecha_concesion: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        },
        clientes_proveedores: {
          type: 'object',
          properties: {
            registro: {
              items: {
                type: 'object',
                properties: {
                  nombre: {
                    type: 'object',
                    properties: {
                      pais: { type: 'string' },
                      provincia: { type: 'string' },
                      forma_juridica: { type: 'string' },
                      tipo: { type: 'string' },
                      valor: { type: 'string' },
                      fuente: { type: 'string' }
                    }
                  },
                  nif: { type: 'string' }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        datos_identificativos: {
          type: 'object',
          properties: {
            capital_social: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                importe: { type: 'string' }
              }
            },
            capital_desembolsado: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                importe: { type: 'string' }
              }
            },
            fax: { type: 'string' },
            incidencias_actividad: { type: 'string' },
            nif: { type: 'string' },
            operacion_mercantil: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                estado: { type: 'string' }
              }
            },
            datosident_grado_actividad: { type: 'string' },
            denominacion: { type: 'string' },
            forma_juridica: {
              type: 'object',
              properties: {
                codigo: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            datosident_situacion: { type: 'string' },
            estado_firma: { type: 'string' },
            domicilio: { type: 'string' },
            web: { type: 'string' },
            domicilio_anterior: {
              type: 'object',
              properties: { domicilio: { type: 'string' } }
            },
            denominacion_anterior: { type: 'string' },
            tamanio_empresa: {
              type: 'object',
              properties: {
                codigo_cuenta: { type: 'string' },
                valor: { type: 'string' }
              }
            },
            nombre_comercial: { type: 'string' },
            datosident_cnae: {
              type: 'object',
              properties: {
                descripcion: { type: 'string' },
                codigo: { type: 'string' },
                tipo: { type: 'string' }
              }
            },
            objeto_social: { type: 'string' },
            otras_situaciones: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                estado: { type: 'string' }
              }
            },
            fecha_inicio: { type: 'string' },
            situacion_mercantil: { type: 'string' },
            empleados: {
              type: 'object',
              properties: {
                listado: {
                  items: {
                    type: 'object',
                    properties: {
                      periodo: { type: 'string' },
                      anyo: { type: 'string' },
                      dif: { type: 'string' },
                      listado: {
                        items: {
                          type: 'object',
                          properties: {
                            situacion: { type: 'string' },
                            genero: { type: 'string' },
                            valor: { type: 'string' }
                          }
                        },
                        type: 'array'
                      },
                      valor: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            otras_actividades: {
              type: 'object',
              properties: {
                actividad: {
                  items: {
                    type: 'object',
                    properties: {
                      descripcion: { type: 'string' },
                      codigo: { type: 'string' },
                      tipo: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            situacion_concursal: {
              type: 'object',
              properties: {
                fecha: { type: 'string' },
                estado: { type: 'string' }
              }
            },
            telefono: { type: 'string' }
          }
        },
        datos_economicos: {
          type: 'object',
          properties: {
            ejerciciosXml: {
              items: {
                type: 'object',
                properties: {
                  Resultado: { type: 'string' },
                  Endeudamiento_a_corto_plazo: { type: 'string' },
                  Fondo_de_Maniobra: { type: 'string' },
                  Endeudamiento_a_largo_plazo: { type: 'string' },
                  Total_Activo: { type: 'string' },
                  anyo: { type: 'string' },
                  modelo_cuentas: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  moneda: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  Free_Cash_Flow: { type: 'string' },
                  EBIT: { type: 'string' },
                  unidades: {
                    type: 'object',
                    properties: {
                      codigo: { type: 'string' },
                      valor: { type: 'string' }
                    }
                  },
                  EBITDA: { type: 'string' },
                  Patrimonio_neto: { type: 'string' },
                  Ventas: { type: 'string' }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        ratios: {
          type: 'object',
          properties: {
            ejercicio_cuentas: {
              items: {
                type: 'object',
                properties: {
                  anyo: { type: 'string' },
                  registro: {
                    items: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        unidad: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    },
                    type: 'array'
                  }
                }
              },
              type: 'array'
            },
            nd: { type: 'string' }
          }
        },
        incidencias: {
          type: 'object',
          properties: {
            ejercicios: {
              items: {
                type: 'object',
                properties: {
                  demandado: {
                    type: 'object',
                    properties: {
                      eleTotalIncidenciaDemandado: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      judiciales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      concursales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      reclamaciones: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  },
                  anyo: { type: 'string' },
                  demandante: {
                    type: 'object',
                    properties: {
                      judiciales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      eleTotalIncidenciaDemandante: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      concursales: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      },
                      reclamaciones: {
                        type: 'object',
                        properties: {
                          total: { type: 'number' },
                          valor: { type: 'string' }
                        }
                      }
                    }
                  }
                }
              },
              type: 'array'
            },
            noDisponible: { type: 'string' },
            texto: { type: 'string' }
          }
        },
        valoracion: {
          type: 'object',
          properties: {
            morosidad: {
              type: 'object',
              properties: {
                regla_exclusion: {
                  type: 'object',
                  properties: {
                    codigo: { type: 'string' },
                    valor: { type: 'string' }
                  }
                },
                definicion: { type: 'string' },
                escala: { type: 'string' }
              }
            },
            nd: { type: 'string' },
            opinion_credito: {
              type: 'object',
              properties: {
                valorTraducido: { type: 'string' },
                codigo: { type: 'string' }
              }
            },
            solvencia: { type: 'string' }
          }
        },
        sectorial: {
          type: 'object',
          properties: {
            nd: { type: 'string' },
            wrapperEjercicioCuentas: {
              type: 'object',
              properties: {
                ejerciciosXml: {
                  items: {
                    type: 'object',
                    properties: {
                      anyo: { type: 'string' },
                      listado: {
                        items: {
                          type: 'object',
                          properties: {
                            sector: { type: 'string' },
                            diferencial: {
                              type: 'object',
                              properties: {
                                valorString: { type: 'string' },
                                unidad: { type: 'string' }
                              }
                            },
                            empresa: { type: 'string' },
                            codigo: { type: 'string' }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  type: 'array'
                }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"actos_borme":{"actos_inscritos":{"listado":[{"fechaPublicacion":"string","numeroSubActos":0,"subActos":[{"codigo":"string","valor":"string"}]}]},"deposito_cuentas":{"registro":[{"anyoCuenta":"string","codigoTipoCuenta":"string","fechaDeposito":"string","fechaPublicacion":"string"}]},"nd":"string","textoCuentasBORME":{"codigo":"string","valor":"string"}},"clientes_proveedores":{"nd":"string","registro":[{"nif":"string","nombre":{"forma_juridica":"string","fuente":"string","pais":"string","provincia":"string","tipo":"string","valor":"string"}}]},"cuentas":{"listado":[{"anyo":"string","listado":[{"bloque":{"nivel":"string","valor":"string"},"codigo":"string","valorTraducido":"string"}],"periodo":"string"}],"nd":"string"},"datos_economicos":{"ejerciciosXml":[{"EBIT":"string","EBITDA":"string","Endeudamiento_a_corto_plazo":"string","Endeudamiento_a_largo_plazo":"string","Fondo_de_Maniobra":"string","Free_Cash_Flow":"string","Patrimonio_neto":"string","Resultado":"string","Total_Activo":"string","Ventas":"string","anyo":"string","modelo_cuentas":{"codigo":"string","valor":"string"},"moneda":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"}}],"nd":"string"},"datos_identificativos":{"capital_desembolsado":{"fecha":"string","importe":"string"},"capital_social":{"fecha":"string","importe":"string"},"datosident_cnae":{"codigo":"string","descripcion":"string","tipo":"string"},"datosident_grado_actividad":"string","datosident_situacion":"string","denominacion":"string","denominacion_anterior":"string","domicilio":"string","domicilio_anterior":{"domicilio":"string"},"empleados":{"listado":[{"anyo":"string","dif":"string","listado":[{"genero":"string","situacion":"string","valor":"string"}],"periodo":"string","valor":"string"}]},"estado_firma":"string","fax":"string","fecha_inicio":"string","forma_juridica":{"codigo":"string","valor":"string"},"incidencias_actividad":"string","nif":"string","nombre_comercial":"string","objeto_social":"string","operacion_mercantil":{"estado":"string","fecha":"string"},"otras_actividades":{"actividad":[{"codigo":"string","descripcion":"string","tipo":"string"}]},"otras_situaciones":{"estado":"string","fecha":"string"},"situacion_concursal":{"estado":"string","fecha":"string"},"situacion_mercantil":"string","tamanio_empresa":{"codigo_cuenta":"string","valor":"string"},"telefono":"string","web":"string"},"detalleInforme":{"fechaEntrevista":"string","fechaUltDato":"string","textoCuentas":"string","textoFuentes":"string","textoInformes":"string"},"incidencias":{"ejercicios":[{"anyo":"string","demandado":{"concursales":{"total":0,"valor":"string"},"eleTotalIncidenciaDemandado":{"total":0,"valor":"string"},"judiciales":{"total":0,"valor":"string"},"reclamaciones":{"total":0,"valor":"string"}},"demandante":{"concursales":{"total":0,"valor":"string"},"eleTotalIncidenciaDemandante":{"total":0,"valor":"string"},"judiciales":{"total":0,"valor":"string"},"reclamaciones":{"total":0,"valor":"string"}}}],"noDisponible":"string","texto":"string"},"informacion_cuentas":{"ejercicio":[{"anyo":"string","auditadopor":"string","auditoria":{"codigo":"string","valor":"string"},"modelo_cuentas":{"codigo":"string","valor":"string"},"moneda":{"codigo":"string","valor":"string"},"periodo":"string","referencia":{"codigo":"string","valor":"string"},"resultado":{"codigo":"string","valor":"string"},"salvedades":{"codigo":"string","valor":"string"},"tipo_cuenta":{"codigo":"string","valor":"string"},"unidades":{"codigo":"string","valor":"string"}}],"nd":"string"},"marcas":{"nd":"string","registros_marcas":{"registro":[{"calificador":"string","claves_niza":{"registro":[{"actividad":"string","clave":"string"}]},"estado":"string","expediente":"string","fecha_actualizacion":"string","fecha_concesion":"string","fecha_renovacion":"string","fecha_solicitud":"string","nombre":"string","ruta_imagen":"string"}]},"registros_nombres_comerciales":{"registro":[{"calificador":"string","claves_niza":{"registro":[{"actividad":"string","clave":"string"}]},"estado":"string","expediente":"string","fecha_actualizacion":"string","fecha_concesion":"string","fecha_renovacion":"string","fecha_solicitud":"string","nombre":"string","ruta_imagen":"string"}]}},"organos_sociales":{"nd":"string","registro":[{"cargo":{"codigo":"string","valor":"string"},"denominacion":"string","fecha":"string"}]},"ratios":{"ejercicio_cuentas":[{"anyo":"string","registro":[{"codigo":"string","unidad":"string","valor":"string"}]}],"nd":"string"},"sectorial":{"nd":"string","wrapperEjercicioCuentas":{"ejerciciosXml":[{"anyo":"string","listado":[{"codigo":"string","diferencial":{"unidad":"string","valorString":"string"},"empresa":"string","sector":"string"}]}]}},"valoracion":{"morosidad":{"definicion":"string","escala":"string","regla_exclusion":{"codigo":"string","valor":"string"}},"nd":"string","opinion_credito":{"codigo":"string","valorTraducido":"string"},"solvencia":"string"},"vinculaciones":{"accionistas":{"registro":[{"forma_juridica":{"codigo":"string","valor":"string"},"nif":"string","nombre":"string","porcentaje":"string"}]},"grupo_empresarial":{"registro":[{"nif":"string","nombre":{"formaJuridica":"string","nombre":"string","pais":"string"},"tipoEmpresa":"string"}]},"inversiones":{"listado":[{"fecha":"string","partida":[{"codigo":"string","valor":"string"}]}]},"moneda":{"codigo":"string","valor":"string"},"nd":"string","operaciones":{"registro":[{"compra":"string","nif":"string","nombre":{"formaJuridica":"string","nombre":"string","pais":"string"},"tipo":"string","venta":"string"}]},"participadas":{"registro":[{"directa":"string","forma_juridica":{"codigo":"string","valor":"string"},"indirecta":"string","nif":"string","nombre":"string","porcentaje":"string","tipo":{"codigo":"string","valor":"string"}}]},"saldos_transacciones":{"registro":[{"businessInformation":{"acronym":{"code":"string","value":"string"},"country":{"code":"string","value":"string"},"fullName":"string","taxId":"string"},"transactionAmounts":{"compensations":"string","interests":"string","providedGuarantees":"string","purchaseOfCurrentAssets":"string","purchaseOfNonCurrentAssets":"string","receivedGuarantees":"string","receivedServices":"string","renderedServices":"string","saleOfCurrentAssets":"string","saleOfNonCurrentAssets":"string"}}]},"socioUnico":{"registro":[{"nombre":"string","porcentaje":"string"}]},"unidades":{"codigo":"string","valor":"string"}}}',
      description: ''
    },
    EvaluationDetail: {
      properties: {
        nonPaymentRatingComments: {
          type: 'object',
          properties: {
            claims: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            nationalClassificationOfEconomicActivities: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            group: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            bankDebt: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            averageCollectionTime: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            financialExpenses: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            shareholdersEquity: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            treasury: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            businessRule: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            manualRating: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            salesEvolution: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            incomeEvolution: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            }
          }
        },
        notAvailable: { type: 'string' },
        opinionOnCreditworthiness: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        solvency: { type: 'string' },
        nonPayment: {
          type: 'object',
          properties: {
            definition: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            scale: { type: 'string' },
            exclusionaryRule: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"nonPayment":{"definition":{"code":"string","value":"string"},"exclusionaryRule":{"code":"string","value":"string"},"scale":"string"},"nonPaymentRatingComments":{"averageCollectionTime":{"code":"string","value":"string"},"bankDebt":{"code":"string","value":"string"},"businessRule":{"code":"string","value":"string"},"claims":{"code":"string","value":"string"},"financialExpenses":{"code":"string","value":"string"},"group":{"code":"string","value":"string"},"incomeEvolution":{"code":"string","value":"string"},"manualRating":{"code":"string","value":"string"},"nationalClassificationOfEconomicActivities":{"code":"string","value":"string"},"salesEvolution":{"code":"string","value":"string"},"shareholdersEquity":{"code":"string","value":"string"},"treasury":{"code":"string","value":"string"}},"notAvailable":"string","opinionOnCreditworthiness":{"code":"string","value":"string"},"solvency":"string"}',
      description: ''
    },
    DefClaimsIDDetail: {
      properties: {
        publishedMedia: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            description: { type: 'string' }
          }
        },
        startDate: { type: 'string' },
        mainAddress: {
          type: 'object',
          properties: {
            province: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            town: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            urbanArea: { type: 'string' },
            streetType: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            country: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            fullAddress: { type: 'string' },
            otherDetails: { type: 'string' },
            number: { type: 'string' },
            dateUntil: { type: 'string' },
            streetName: { type: 'string' },
            postcode: { type: 'string' }
          }
        },
        endDate: { type: 'string' },
        companyName: { type: 'string' },
        taxId: { type: 'string' },
        claimPublicationDate: { type: 'string' },
        claimedAmount: { type: 'string' },
        claimantType: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            description: { type: 'string' }
          }
        },
        claimConcept: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            description: { type: 'string' }
          }
        }
      },
      type: 'object',
      example:
        '{"claimConcept":{"code":"string","description":"string"},"claimPublicationDate":"string","claimantType":{"code":"string","description":"string"},"claimedAmount":"string","companyName":"string","endDate":"string","mainAddress":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-07T10:34:35.001Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"publishedMedia":{"code":"string","description":"string"},"startDate":"string","taxId":"string"}',
      description: ''
    },
    responseError: {
      additionalProperties: false,
      properties: {
        status: {
          type: 'string',
          description: 'HttpStatus',
          example: '404'
        },
        message: {
          type: 'string',
          description: 'Error message',
          example: 'Resource not found'
        },
        code: {
          example: '1404',
          type: 'integer',
          description: 'Error code',
          format: 'int32'
        },
        more_info: {
          type: 'string',
          description: 'Additional information',
          example: 'This error is produced when ...'
        }
      },
      description: 'Payload error form'
    },
    alertsTypeDetails: {
      properties: {
        typeID: { type: 'number' },
        reportingMode: { type: 'string' },
        payLoad: {
          type: 'object',
          properties: {
            numRegs: { type: 'number' },
            changeDate: { type: 'string' },
            fileName: { type: 'string' }
          }
        },
        typeDescription: { type: 'string' }
      },
      type: 'object',
      example:
        '{"typeID":1,"typeDescription":"Masivo","reportingMode":"MASSIVE","payLoad":{"fileName":"Massive alert file name","numRegs":0,"changeDate":"2020-02-58 13:21:49"}}',
      description: ''
    },
    organisationsArray: {
      items: { $ref: '#/definitions/organisation' },
      type: 'array'
    },
    ProDetail: {
      properties: {
        notAvailable: { type: 'string' },
        imports: { type: 'string' },
        purchasePercentage: { type: 'string' },
        providersPortfolio: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        importPercentage: { type: 'string' }
      },
      type: 'object',
      example:
        '{"importPercentage":"string","imports":"string","notAvailable":"string","providersPortfolio":{"code":"string","value":"string"},"purchasePercentage":"string"}',
      description: ''
    },
    baseRequest: {
      properties: {
        lang: {
          type: 'string',
          description:
            'C\u00f3digo del idioma en el que se est\u00e1n retornando las descripciones'
        },
        user: { type: 'string', description: 'Alias del usuario' }
      }
    },
    activity: {
      required: [
        'activityClassCode',
        'activityClassDesc',
        'activityClassType',
        'activityClassVersion'
      ],
      properties: {
        activityClassCode: {
          type: 'string',
          description: 'C\u00f3digo'
        },
        activityClassType: {
          type: 'string',
          description: 'Tipo de actividad'
        },
        activityClassDesc: {
          type: 'string',
          description: 'Descripci\u00f3n'
        },
        activityClassVersion: {
          type: 'string',
          description: 'Versi\u00f3n'
        }
      }
    },
    AFDDetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              accountsWrapper: {
                type: 'object',
                properties: {
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"accountsWrapper":{"accounts":[{"balance":"string","description":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"}}]}',
      description: ''
    },
    CBSAISDetails: {
      properties: { notAvailable: { type: 'string' } },
      type: 'object',
      example: '{"notAvailable":"string"}',
      description: ''
    },
    IncDetail: {
      properties: {
        ejercicios: {
          items: {
            type: 'object',
            properties: {
              demandado: {
                type: 'object',
                properties: {
                  eleTotalIncidenciaDemandado: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  },
                  judiciales: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  },
                  concursales: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  },
                  reclamaciones: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  }
                }
              },
              anyo: { type: 'string' },
              demandante: {
                type: 'object',
                properties: {
                  judiciales: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  },
                  eleTotalIncidenciaDemandante: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  },
                  concursales: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  },
                  reclamaciones: {
                    type: 'object',
                    properties: {
                      total: { type: 'number' },
                      valor: { type: 'string' }
                    }
                  }
                }
              }
            }
          },
          type: 'array'
        },
        noDisponible: { type: 'string' },
        texto: { type: 'string' }
      },
      type: 'object',
      example:
        '{"ejercicios":[{"anyo":"string","demandado":{"concursales":{"total":0,"valor":"string"},"eleTotalIncidenciaDemandado":{"total":0,"valor":"string"},"judiciales":{"total":0,"valor":"string"},"reclamaciones":{"total":0,"valor":"string"}},"demandante":{"concursales":{"total":0,"valor":"string"},"eleTotalIncidenciaDemandante":{"total":0,"valor":"string"},"judiciales":{"total":0,"valor":"string"},"reclamaciones":{"total":0,"valor":"string"}}}],"noDisponible":"string","texto":"string"}',
      description: ''
    },
    FaciliDetail: {
      properties: {
        notAvailable: { type: 'string' },
        facilitiesNumber: { type: 'number' },
        otherFacilities: {
          items: {
            type: 'object',
            properties: {
              geolocation: {
                type: 'object',
                properties: {
                  latitude: { type: 'number' },
                  longitude: { type: 'number' }
                }
              },
              commercialTitle: { type: 'string' },
              machineryLife: { type: 'string' },
              use: { type: 'string' },
              telephone: { type: 'string' },
              squareMeters: { type: 'string' },
              investigatedFacility: { type: 'string' },
              descriptions: {
                items: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                type: 'array'
              },
              ownership: { type: 'string' },
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              addressStatus: { type: 'string' },
              photograph: { type: 'string' },
              areaType: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              incidents: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  unavailabilityReason: { type: 'string' },
                  incidentDetails: {
                    items: {
                      type: 'object',
                      properties: {
                        impact: { type: 'string' },
                        dateTo: { type: 'string' },
                        dateFrom: { type: 'string' },
                        type: { type: 'string' }
                      }
                    },
                    type: 'array'
                  }
                }
              },
              expectedRenewalImprovement: { type: 'string' },
              proficiencyLevel: { type: 'string' },
              expectedRefurbishmentImprovement: { type: 'string' },
              location: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              situation: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        },
        mainFacility: {
          type: 'object',
          properties: {
            geolocation: {
              type: 'object',
              properties: {
                latitude: { type: 'number' },
                longitude: { type: 'number' }
              }
            },
            commercialTitle: { type: 'string' },
            machineryLife: { type: 'string' },
            use: { type: 'string' },
            telephone: { type: 'string' },
            squareMeters: { type: 'string' },
            investigatedFacility: { type: 'string' },
            descriptions: {
              items: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              type: 'array'
            },
            ownership: { type: 'string' },
            address: {
              type: 'object',
              properties: {
                province: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                town: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                urbanArea: { type: 'string' },
                streetType: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                country: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                fullAddress: { type: 'string' },
                otherDetails: { type: 'string' },
                number: { type: 'string' },
                dateUntil: { type: 'string' },
                streetName: { type: 'string' },
                postcode: { type: 'string' }
              }
            },
            addressStatus: { type: 'string' },
            photograph: { type: 'string' },
            areaType: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            incidents: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                unavailabilityReason: { type: 'string' },
                incidentDetails: {
                  items: {
                    type: 'object',
                    properties: {
                      impact: { type: 'string' },
                      dateTo: { type: 'string' },
                      dateFrom: { type: 'string' },
                      type: { type: 'string' }
                    }
                  },
                  type: 'array'
                }
              }
            },
            expectedRenewalImprovement: { type: 'string' },
            proficiencyLevel: { type: 'string' },
            expectedRefurbishmentImprovement: { type: 'string' },
            location: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            },
            situation: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                value: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"facilitiesNumber":0,"mainFacility":{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-02T10:30:43.011Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"addressStatus":"string","areaType":{"code":"string","value":"string"},"commercialTitle":"string","descriptions":[{"code":"string","value":"string"}],"expectedRefurbishmentImprovement":"string","expectedRenewalImprovement":"string","geolocation":{"latitude":0,"longitude":0},"incidents":{"code":"string","incidentDetails":[{"dateFrom":"string","dateTo":"string","impact":"string","type":"string"}],"unavailabilityReason":"string"},"investigatedFacility":"string","location":{"code":"string","value":"string"},"machineryLife":"string","ownership":"string","photograph":"string","proficiencyLevel":"string","situation":{"code":"string","value":"string"},"squareMeters":"string","telephone":"string","use":"string"},"notAvailable":"string","otherFacilities":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-02T10:30:43.011Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"addressStatus":"string","areaType":{"code":"string","value":"string"},"commercialTitle":"string","descriptions":[{"code":"string","value":"string"}],"expectedRefurbishmentImprovement":"string","expectedRenewalImprovement":"string","geolocation":{"latitude":0,"longitude":0},"incidents":{"code":"string","incidentDetails":[{"dateFrom":"string","dateTo":"string","impact":"string","type":"string"}],"unavailabilityReason":"string"},"investigatedFacility":"string","location":{"code":"string","value":"string"},"machineryLife":"string","ownership":"string","photograph":"string","proficiencyLevel":"string","situation":{"code":"string","value":"string"},"squareMeters":"string","telephone":"string","use":"string"}]}',
      description: ''
    },
    bodyPostDetails: {
      additionalProperties: false,
      properties: {
        cpvs: {
          type: 'string',
          description: 'cpvs',
          example: '03111400'
        },
        awardeeIdentifier: { type: 'string' },
        awarderIdentifier: { type: 'string' },
        language: {
          type: 'string',
          description: 'language',
          example: 'es'
        },
        minAmount: {
          description: 'minAmount',
          type: 'integer',
          example: '5',
          format: 'int32'
        },
        userId: {
          example: '255',
          type: 'integer',
          description: 'userId',
          format: 'int32'
        },
        awarderIdentifierType: { type: 'string', example: 'NREG' },
        email: {
          type: 'string',
          description: 'email',
          example: 'email@email.com'
        },
        alias: {
          type: 'string',
          example: 'subscripci\u00f3n a limpieza',
          description: 'alias'
        },
        query: {
          type: 'string',
          description: 'query',
          example: 'seguros'
        },
        scope: {
          type: 'string',
          example: 'ES,IT',
          description: 'scope'
        },
        awardeeIdentifierType: { type: 'string', example: 'NREG' },
        maxAmount: {
          description: 'maxAmount',
          type: 'integer',
          example: '20',
          format: 'int32'
        }
      }
    },
    countryDetails: {
      properties: {
        country: { type: 'string' },
        bigram: { type: 'string' },
        trigram: { type: 'string' }
      },
      type: 'object',
      example: '{"country":"Argentina","trigram":"ARG","bigram":"AR"}',
      description: ''
    },
    OECDetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              equityA: {
                type: 'object',
                properties: {
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              equityB: {
                type: 'object',
                properties: {
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"},"equityA":{"accounts":[{"balance":"string","description":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"equityB":{"accounts":[{"balance":"string","description":{"code":"string","value":"string"}}],"unavailabilityReason":"string"}}]}',
      description: ''
    },
    tendersTwins: {
      properties: {
        numResults: { type: 'number' },
        totalResults: { type: 'number' },
        tenders: {
          items: {
            type: 'object',
            properties: {
              tenderSource: { type: 'string' },
              endDate: { type: 'string' },
              description: { type: 'string' },
              cpvDescriptionES: { type: 'string' },
              cpvDescriptionEN: { type: 'string' },
              date: { type: 'string' },
              contractType: { type: 'string' },
              id: { type: 'number' },
              title: { type: 'string' },
              country: {},
              budget: { type: 'string' },
              record: { type: 'string' },
              cpv: { type: 'string' },
              organism: { type: 'string' },
              tenderState: { type: 'string' },
              cpvDescriptionPT: { type: 'string' }
            }
          },
          type: 'array'
        },
        trigramCounters: {}
      },
      type: 'object',
      example:
        '{"totalResults":1,"numResults":20,"tenders":[{"id":3220541,"date":"12/09/2019","record":"40-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis per al funcionament i dinamitzaci\u00f3 de dos punts d\'atenci\u00f3 a l\'activitat econ\u00f2mica a dos districtes de la ciutat, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 40-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 86940.00; Estado: EVALUACION","budget":"434700.0","endDate":"12/09/2019","cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"},{"id":3209443,"date":"26/09/2019","record":"48-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis de capacitaci\u00f3 en habilitats emprenedores en el sector de l\'artesania, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 48-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 20400.00; Estado: ADJUDICADA","budget":"30600.0","endDate":"29/07/2019","cpv":"80590000","contractType":"Servicios","country":null,"tenderSource":"Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Tutorial services","cpvDescriptionES":"Servicios de tutor\u00eda","cpvDescriptionPT":"Servi\u00e7os de tutoria"},{"id":3320065,"date":"09/07/2019","record":"48-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis de capacitaci\u00f3 en habilitats emprenedores en el sector de l\'artesania, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 48-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 20400.00; Estado: EN PLAZO","budget":"30600.0","endDate":"29/07/2019","cpv":"80590000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Tutorial services","cpvDescriptionES":"Servicios de tutor\u00eda","cpvDescriptionPT":"Servi\u00e7os de tutoria"},{"id":3209873,"date":"14/10/2019","record":"58/19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis d\'impartici\u00f3 de les accions d\'acompanyament del Programa Creamedia de la Direcci\u00f3 d\'Emprenedoria, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 58/19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 50130.00; Estado: EN PLAZO","budget":"150390.0","endDate":"24/10/2019","cpv":"80500000, 80590000","contractType":"Servicios","country":null,"tenderSource":"Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Training services|Tutorial services","cpvDescriptionES":"Servicios de formaci\u00f3n|Servicios de tutor\u00eda","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o|Servi\u00e7os de tutoria"},{"id":3225886,"date":"26/09/2019","record":"39-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis de formaci\u00f3 espec\u00edfica i pr\u00e0ctica professional del Programa Operatiu d\'Ocupaci\u00f3, Formaci\u00f3 i Educaci\u00f3 (POEFE) Passarel\u00b7les cap a l\'ocupaci\u00f3 i la inclusi\u00f3, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 39-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 42748.70; Estado: ADJUDICADA","budget":"128246.1","endDate":"15/07/2019","cpv":"80500000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Training services","cpvDescriptionES":"Servicios de formaci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o"},{"id":3220960,"date":"13/09/2019","record":"46-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis per al disseny, creaci\u00f3, impartici\u00f3 i/o dinamitzaci\u00f3 de les accions formatives de determinades especialitats de l\'oferta formativa del Programa Barcelona Treball, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 46-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 159450.00; Estado: EVALUACION","budget":"829140.0","endDate":"13/09/2019","cpv":"80500000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Training services","cpvDescriptionES":"Servicios de formaci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o"},{"id":3209382,"date":"03/07/2019","record":"34-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis de disseny, implementaci\u00f3 i execuci\u00f3 d\'un programa d\'acompanyament de projectesdesenvolupats per empreses i entitats del sector art\u00edstic, cultural i creatiu en el marc del Projecte Smath-un projecte cofinan\u00e7at pel Programa Interreg MED, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 34-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 22200.00; Estado: EN PLAZO","budget":"26640.0","endDate":"22/07/2019","cpv":"80510000, 66171000","contractType":"Servicios","country":null,"tenderSource":"Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Specialist training services|Financial consultancy services","cpvDescriptionES":"Servicios de formaci\u00f3n especializada|Servicios de asesoramiento financiero","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o especializada|Servi\u00e7os de consultoria financeira"},{"id":3219125,"date":"31/07/2019","record":"08-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis docents per al disseny, creaci\u00f3 i impartici\u00f3 de part de les accions formatives de determinades especialitats de l\'oferta formativa estable de Barcelona Activa gestionada per la Direcci\u00f3 Executiva d\'Emprenedoria, Empresa i Innovaci\u00f3, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social (Exp. 08/19)","description":"Id licitaci\u00f3n: 08-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 699825.00; Estado: ADJUDICADA","budget":"1889527.5","endDate":"17/04/2019","cpv":"80500000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Training services","cpvDescriptionES":"Servicios de formaci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o"},{"id":3323539,"date":"12/07/2019","record":"07-19","organism":"Barcelona ACTIVA SAU SPM","title":"L\'objecte del contracte consisteix en la prestaci\u00f3 dels serveis de creaci\u00f3, conversi\u00f3 i impartici\u00f3 de continguts del Programa Barcelona Ind\u00fastria Urbana per millorar la competitivitat de les empreses en l\'\u00e0mbit de la ind\u00fastria 4.0, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social. El contracte es divideix en 2 Lots.","description":"Id licitaci\u00f3n: 07-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 41055.25; Estado: RESUELTA","budget":"41055.25","endDate":"27/03/2019","cpv":"80510000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Resuelta","cpvDescriptionEN":"Specialist training services","cpvDescriptionES":"Servicios de formaci\u00f3n especializada","cpvDescriptionPT":"Servi\u00e7os de forma\u00e7\u00e3o especializada"},{"id":3253939,"date":"03/07/2019","record":"14-19","organism":"Barcelona ACTIVA SAU SPM","title":"L\'objecte del contracte es la concessi\u00f3 del servei d\'explotaci\u00f3 del bar restaurant de l\'equipament Parc Tecnol\u00f2gic de Barcelona Activa ubicat al carrer Marie Curie, 8-14 de Barcelona, amb incorporaci\u00f3 d\'objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 14-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 0.00; Estado: EN PLAZO","budget":"1509339.0","endDate":"26/07/2019","cpv":"55000000","contractType":"Concesi\u00f3n de Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Hotel, restaurant and retail trade services","cpvDescriptionES":"Servicios comerciales al por menor de hosteler\u00eda y restauraci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de hotelaria, restaura\u00e7\u00e3o e com\u00e9rcio a retalho"},{"id":3217245,"date":"02/07/2019","record":"35-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis de disseny i articulaci\u00f3 d\'accions d\'acompanyament i formaci\u00f3 per a promoure els valors de l\'economia social i solid\u00e0ria i el cooperativisme entre les i els joves de la ciutat tant en l\'\u00e0mbit de l\'educaci\u00f3 reglada com no formal, amb objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 35-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 68262.82; Estado: EN PLAZO","budget":"68262.82","endDate":"18/07/2019","cpv":"79421000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Project-management services other than for construction work","cpvDescriptionES":"Servicios de gesti\u00f3n de proyectos que no sean los de construcci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de gest\u00e3o de projectos, excepto projectos de constru\u00e7\u00e3o"},{"id":3219800,"date":"10/09/2019","record":"45-19","organism":"Barcelona ACTIVA SAU SPM","title":"Serveis d\'execuci\u00f3 de programes a mida d\'innovaci\u00f3 socioecon\u00f2mica,amb objectius d\'efici\u00e8ncia social.","description":"Id licitaci\u00f3n: 45-19; \u00d3rgano de Contrataci\u00f3n: Barcelona ACTIVA SAU SPM; Importe: 118601.84; Estado: EVALUACION","budget":"593009.2","endDate":"10/09/2019","cpv":"79421000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Project-management services other than for construction work","cpvDescriptionES":"Servicios de gesti\u00f3n de proyectos que no sean los de construcci\u00f3n","cpvDescriptionPT":"Servi\u00e7os de gest\u00e3o de projectos, excepto projectos de constru\u00e7\u00e3o"},{"id":3215633,"date":"28/08/2019","record":"563/2019","organism":"Ajuntament de Sabadell","title":"Prestaci\u00f3 del Servei d\'Informaci\u00f3, Atenci\u00f3 i Acompanyament LGTBI, consistent en informar, assessorar i acompanyar a persones lgtbi, persones de l\'entorn, professionals i entitats que busquin suport professional referent a la diversitat sexual i de g\u00e8nere, assessorament en relaci\u00f3 a l\'exercici dels seus drets en tots els \u00e0mbits relacionats amb la vida laboral, social, sanit\u00e0ria, personal i familiar, aix\u00ed com en situacions relacionades amb la discriminaci\u00f3 per ra\u00f3 de g\u00e8nere.","description":"Id licitaci\u00f3n: 563/2019; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Sabadell; Importe: 11029.70; Estado: EN PLAZO","budget":"46324.74","endDate":"12/09/2019","cpv":"98113000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Services furnished by specialist organisations","cpvDescriptionES":"Servicios proporcionados por organizaciones especializadas","cpvDescriptionPT":"Servi\u00e7os prestados por organiza\u00e7\u00f5es especializadas"},{"id":3216801,"date":"12/08/2019","record":"S-0228/2019","organism":"Ajuntament de Reus","title":"L\'objecte \u00e9s la contractaci\u00f3 del serveis de  desenvolupament de l\'assessorament legal i la realitzaci\u00f3 d\'accions de sensibilitzaci\u00f3 comunit\u00e0ria del Servei d\'Informaci\u00f3 i Atenci\u00f3 a les Dones (SIAD).","description":"Id licitaci\u00f3n: S-0228/2019; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Reus; Importe: 15360.00; Estado: EN PLAZO","budget":"64512.0","endDate":"27/08/2019","cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"},{"id":3217022,"date":"06/08/2019","record":"2018/2317","organism":"Organisme Aut\u00f2nom de Salut P\u00fablica de la Diputaci\u00f3 de Girona","title":"Assessorament en el disseny de pol\u00edtiques, programes i processos d\'avaluaci\u00f3 de l\'\u00e0rea de promoci\u00f3 de la salut, benestar i atenci\u00f3 a les persones; dels programes inclosos al Cat\u00e0leg de Serveis de Dipsalut","description":"Id licitaci\u00f3n: 2018/2317; \u00d3rgano de Contrataci\u00f3n: Organisme Aut\u00f2nom de Salut P\u00fablica de la Diputaci\u00f3 de Girona; Importe: 38608.00; Estado: ADJUDICADA","budget":"84937.6","endDate":"26/03/2019","cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"},{"id":3219229,"date":"04/07/2019","record":"N774190010","organism":"Ajuntament de Barber\u00e0 del Vall\u00e8s","title":"La prestaci\u00f3 del servei estar\u00e0 destinat a l\'assessorament especialitzat en mat\u00e8ria de comer\u00e7, en els vessant de: gesti\u00f3 de la formaci\u00f3 especialitzada en retail; consultoria sobre normatives, formularis de subvencions i oportunitat de finan\u00e7ament en mat\u00e8ria de comer\u00e7; an\u00e0lisi del teixit econ\u00f2mic i social del municipi; assessorament estrat\u00e8gic per al foment del comer\u00e7 de proximitat; planificaci\u00f3, dinamitzaci\u00f3 i gesti\u00f3 d\'un Retail tour anual; elaboraci\u00f3 i distribuci\u00f3 de newsletters informatius i divulgatius de novetats en mat\u00e8ria de comer\u00e7; assessorament personalitzat per als establiments comercials.","description":"Id licitaci\u00f3n: N774190010; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Barber\u00e0 del Vall\u00e8s; Importe: 11000.00; Estado: ADJUDICADA","budget":"22000.0","endDate":"12/06/2019","cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"},{"id":3222294,"date":"31/07/2019","record":"19000238","organism":"Ajuntament de Barcelona","title":"Servei de suport i assessorament al funcionament del Consell de Ciutat de la ciutat de Barcelona. Aquest servei inclou tamb\u00e9 el suport a la Direcci\u00f3 de Serveis de Democr\u00e0cia Activa i Descentralitzaci\u00f3 en el funcionament del Consell de Ciutat","description":"Id licitaci\u00f3n: 19000238; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Barcelona; Importe: 95800.30; Estado: ADJUDICADA","budget":"162860.52","endDate":"26/04/2019","cpv":"79400000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Business and management consultancy and related services","cpvDescriptionES":"Servicios de consultor\u00eda comercial y de gesti\u00f3n y servicios afines","cpvDescriptionPT":"Servi\u00e7os de consultoria em mat\u00e9ria comercial e de gest\u00e3o e servi\u00e7os conexos"},{"id":3222019,"date":"18/09/2019","record":"CO2019033ASPI","organism":"Ajuntament de Sant Joan Desp\u00ed","title":"L\'objecte del contracte es divideix en els lots seg\u00fcents:\\n\\nLOT 1. Servei d\'informaci\u00f3 i atenci\u00f3 a les dones i llurs fills i filles\\n\\nEs tracta d\'un servei que dona resposta a les diferents demandes d\'informaci\u00f3 i atenci\u00f3, i atenci\u00f3 psicol\u00f2gica, a les dones de la ciutat, vinculades a les situacions de discriminaci\u00f3 per causes de g\u00e8nere i/o viol\u00e8ncies masclistes, i a llurs fills i filles:\\n\u00bf\\tInformaci\u00f3 i Atenci\u00f3 a les dones\\n\u00bf\\tAtenci\u00f3 psicol\u00f2gica individual \\n\u00bf\\tAtenci\u00f3 psicol\u00f2gica als fills i filles de les dones ateses\\n\u00bf\\tAtenci\u00f3 psicol\u00f2gica grupal\\n\u00bf\\tSuport al Circuit municipal de Viol\u00e8ncies Masclistes\\n\\nLOT 2. Servei d\'assessoria jur\u00eddica especialitzada per a dones\\n\\nServei d\'assessoria jur\u00eddica especialitzat per a dones que ofereix una atenci\u00f3 immediata personalitzada en temes jur\u00eddics relacionats amb situacions de viol\u00e8ncies masclistes. El servei d\'assessoria jur\u00eddica est\u00e0 concebut per donar resposta a assessoraments puntuals en demandes concretes.\\n\\nTamb\u00e9 oferir\u00e0 informaci\u00f3, orientaci\u00f3 i assessorament jur\u00eddic general als equips b\u00e0sics de serveis socials en relaci\u00f3 a les problem\u00e0tiques que els hi afecten en el desenvolupament de la seva tasca professional vinculada a l\'\u00e0mbit de les viol\u00e8ncies masclistes i, a m\u00e9s, formar\u00e0 part de les 6 reunions anuals de la comissi\u00f3 de viol\u00e8ncies masclistes","description":"Id licitaci\u00f3n: CO2019033ASPI; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Sant Joan Desp\u00ed; Importe: 106000.00; Estado: EN PLAZO","budget":"233200.0","endDate":"03/10/2019","cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"En plazo","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"},{"id":3258528,"date":"02/08/2019","record":"1848/2018","organism":"Ajuntament de Sant Adri\u00e0 de Bes\u00f2s","title":"Prestaci\u00f3 del servei d\'assessorament psicol\u00f2gic al CIOD (Centre d\'Informaci\u00f3 i Orientaci\u00f3 a la Dona).","description":"Id licitaci\u00f3n: 1848/2018; \u00d3rgano de Contrataci\u00f3n: Ajuntament de Sant Adri\u00e0 de Bes\u00f2s; Importe: 21542.40; Estado: EVALUACION","budget":"78140.16","endDate":null,"cpv":"85312300","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Pendiente","cpvDescriptionEN":"Guidance and counselling services","cpvDescriptionES":"Servicios de orientaci\u00f3n y asesoramiento","cpvDescriptionPT":"Servi\u00e7os de orienta\u00e7\u00e3o e aconselhamento"},{"id":3222434,"date":"19/09/2019","record":"19/0054-00-CP/01","organism":"Institut Municipal Parcs i Jardins de Barcelona","title":"Contractaci\u00f3 dels serveis d\'assist\u00e8ncia i assessorament t\u00e8cnic en l\'\u00e0mbit de la prevenci\u00f3 d\'accidents, salvament i socorrisme, informaci\u00f3 a l\'usuari i assist\u00e8ncia al bany assistit a les platges de la ciutat de Barcelona","description":"Id licitaci\u00f3n: 19/0054-00-CP/01; \u00d3rgano de Contrataci\u00f3n: Institut Municipal Parcs i Jardins de Barcelona; Importe: 75867.76; Estado: ADJUDICADA","budget":"125157.01","endDate":"14/05/2019","cpv":"79000000","contractType":"Servicios","country":null,"tenderSource":"Hist\u00f3rico Plataformas Agregadas","tenderState":"Adjudicada","cpvDescriptionEN":"Business services: law, marketing, consulting, recruitment, printing and security","cpvDescriptionES":"Servicios a empresas: legislaci\u00f3n, mercadotecnia, asesor\u00eda, selecci\u00f3n de personal, imprenta y seguridad","cpvDescriptionPT":"Servi\u00e7os a empresas: direito, comercializa\u00e7\u00e3o, consultoria, recrutamento, impress\u00e3o e seguran\u00e7a"}],"trigramCounters":null}',
      description: ''
    },
    nameAddress: {
      required: ['address', 'name'],
      properties: {
        name: { type: 'string', description: 'Nombre de la empresa' },
        address: { $ref: '#/definitions/address' }
      }
    },
    NTAADetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              audit: {
                type: 'object',
                properties: {
                  reservations: { type: 'string' },
                  auditCost: { type: 'string' },
                  auditor: { type: 'string' },
                  notProvided: { type: 'string' }
                }
              },
              operations: {
                type: 'object',
                properties: {
                  operationCompanys: {
                    items: {
                      type: 'object',
                      properties: {
                        operations: {
                          type: 'object',
                          properties: {
                            purchases: { type: 'string' },
                            sales: { type: 'string' }
                          }
                        },
                        businessInformation: {
                          type: 'object',
                          properties: {
                            acronym: {
                              type: 'object',
                              properties: {
                                code: { type: 'string' },
                                value: { type: 'string' }
                              }
                            },
                            country: {
                              type: 'object',
                              properties: {
                                code: { type: 'string' },
                                value: { type: 'string' }
                              }
                            },
                            fullName: { type: 'string' },
                            taxId: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  totalOperations: {
                    type: 'object',
                    properties: {
                      purchases: { type: 'string' },
                      sales: { type: 'string' }
                    }
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              customers: {
                type: 'object',
                properties: {
                  items: {
                    items: {
                      type: 'object',
                      properties: {
                        acronym: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        country: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        fullName: { type: 'string' },
                        taxId: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              suppliers: {
                type: 'object',
                properties: {
                  items: {
                    items: {
                      type: 'object',
                      properties: {
                        acronym: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        country: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        fullName: { type: 'string' },
                        taxId: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              transactionBalances: {
                type: 'object',
                properties: {
                  totalTransactionBalances: {
                    type: 'object',
                    properties: {
                      interests: { type: 'string' },
                      saleOfCurrentAssets: { type: 'string' },
                      compensations: { type: 'string' },
                      purchaseOfCurrentAssets: { type: 'string' },
                      providedGuarantees: { type: 'string' },
                      saleOfNonCurrentAssets: { type: 'string' },
                      purchaseOfNonCurrentAssets: { type: 'string' },
                      renderedServices: { type: 'string' },
                      receivedGuarantees: { type: 'string' },
                      receivedServices: { type: 'string' }
                    }
                  },
                  unavailabilityReason: { type: 'string' },
                  transactionCompanys: {
                    items: {
                      type: 'object',
                      properties: {
                        transactionAmounts: {
                          type: 'object',
                          properties: {
                            interests: { type: 'string' },
                            saleOfCurrentAssets: { type: 'string' },
                            compensations: { type: 'string' },
                            purchaseOfCurrentAssets: { type: 'string' },
                            providedGuarantees: { type: 'string' },
                            saleOfNonCurrentAssets: { type: 'string' },
                            purchaseOfNonCurrentAssets: {
                              type: 'string'
                            },
                            renderedServices: { type: 'string' },
                            receivedGuarantees: { type: 'string' },
                            receivedServices: { type: 'string' }
                          }
                        },
                        businessInformation: {
                          type: 'object',
                          properties: {
                            acronym: {
                              type: 'object',
                              properties: {
                                code: { type: 'string' },
                                value: { type: 'string' }
                              }
                            },
                            country: {
                              type: 'object',
                              properties: {
                                code: { type: 'string' },
                                value: { type: 'string' }
                              }
                            },
                            fullName: { type: 'string' },
                            taxId: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  }
                }
              },
              investments: {
                type: 'object',
                properties: {
                  previousInvestments: {
                    type: 'object',
                    properties: {
                      date: { type: 'string' },
                      longTermInvestment: { type: 'string' },
                      totalInvestments: { type: 'string' },
                      shortTermInvestment: { type: 'string' }
                    }
                  },
                  unavailabilityReason: { type: 'string' },
                  currentInvestments: {
                    type: 'object',
                    properties: {
                      date: { type: 'string' },
                      longTermInvestment: { type: 'string' },
                      totalInvestments: { type: 'string' },
                      shortTermInvestment: { type: 'string' }
                    }
                  }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"audit":{"auditCost":"string","auditor":"string","notProvided":"string","reservations":"string"},"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"},"customers":{"items":[{"acronym":{"code":"string","value":"string"},"country":{"code":"string","value":"string"},"fullName":"string","taxId":"string"}],"unavailabilityReason":"string"},"investments":{"currentInvestments":{"date":"string","longTermInvestment":"string","shortTermInvestment":"string","totalInvestments":"string"},"previousInvestments":{"date":"string","longTermInvestment":"string","shortTermInvestment":"string","totalInvestments":"string"},"unavailabilityReason":"string"},"operations":{"operationCompanys":[{"businessInformation":{"acronym":{"code":"string","value":"string"},"country":{"code":"string","value":"string"},"fullName":"string","taxId":"string"},"operations":{"purchases":"string","sales":"string"}}],"totalOperations":{"purchases":"string","sales":"string"},"unavailabilityReason":"string"},"suppliers":{"items":[{"acronym":{"code":"string","value":"string"},"country":{"code":"string","value":"string"},"fullName":"string","taxId":"string"}],"unavailabilityReason":"string"},"transactionBalances":{"totalTransactionBalances":{"compensations":"string","interests":"string","providedGuarantees":"string","purchaseOfCurrentAssets":"string","purchaseOfNonCurrentAssets":"string","receivedGuarantees":"string","receivedServices":"string","renderedServices":"string","saleOfCurrentAssets":"string","saleOfNonCurrentAssets":"string"},"transactionCompanys":[{"businessInformation":{"acronym":{"code":"string","value":"string"},"country":{"code":"string","value":"string"},"fullName":"string","taxId":"string"},"transactionAmounts":{"compensations":"string","interests":"string","providedGuarantees":"string","purchaseOfCurrentAssets":"string","purchaseOfNonCurrentAssets":"string","receivedGuarantees":"string","receivedServices":"string","renderedServices":"string","saleOfCurrentAssets":"string","saleOfNonCurrentAssets":"string"}}],"unavailabilityReason":"string"}}]}',
      description: ''
    },
    ordinaryFinancialRatiosDetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              ratios: {
                type: 'object',
                properties: {
                  items: {
                    items: {
                      type: 'object',
                      properties: {
                        unit: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        },
                        value: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"},"ratios":{"items":[{"description":{"code":"string","value":"string"},"unit":{"code":"string","value":"string"},"value":"string"}],"unavailabilityReason":"string"}}]}',
      description: ''
    },
    getOrganisationByKey: {
      additionalProperties: false,
      properties: { 'propiedad-nueva-1': { type: 'string' } }
    },
    DPIBEResDetail: {
      properties: {
        province: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        folio: { type: 'string' },
        incorporationDate: { type: 'string' },
        corporatePurpose: { type: 'string' },
        section: { type: 'string' },
        volume: { type: 'string' },
        currency: { type: 'string' },
        subscribedCapital: { type: 'string' },
        lastActType: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        paidInCapital: { type: 'string' },
        capitalSubscribedRaw: { type: 'number' },
        notAvailable: { type: 'string' },
        page: { type: 'string' }
      },
      type: 'object',
      example:
        '{"capitalSubscribedRaw":0,"corporatePurpose":"string","currency":"string","folio":"string","incorporationDate":"string","lastActType":{"code":"string","value":"string"},"notAvailable":"string","page":"string","paidInCapital":"string","province":{"code":"string","value":"string"},"section":"string","subscribedCapital":"string","volume":"string"}',
      description: ''
    },
    CECDetail: {
      properties: {
        notAvailable: { type: 'string' },
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              equityA: {
                type: 'object',
                properties: {
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              },
              equityB: {
                type: 'object',
                properties: {
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  },
                  unavailabilityReason: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","wrapperYears":[{"balanceInformation":{"balanceType":{"code":"string","value":"string"},"closeDate":"string","documentLink":"string","period":"string","startDate":"string","year":"string"},"equityA":{"accounts":[{"balance":"string","description":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"equityB":{"accounts":[{"balance":"string","description":{"code":"string","value":"string"}}],"unavailabilityReason":"string"}}]}',
      description: ''
    },
    CustoDetail: {
      properties: {
        distributionChannels: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        customerPortfolio: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        activityScope: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        export: { type: 'string' },
        lastYearExportPercentage: { type: 'string' },
        averageCollectionTime: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        },
        notAvailable: { type: 'string' },
        customerType: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        exportCountries: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"activityScope":{"code":"string","value":"string"},"averageCollectionTime":{"code":"string","value":"string"},"customerPortfolio":{"code":"string","value":"string"},"customerType":{"dataSource":{"date":"string","source":"string"},"items":[{"code":"string","value":"string"}],"unavailabilityReason":"string"},"distributionChannels":{"dataSource":{"date":"string","source":"string"},"items":[{"code":"string","value":"string"}],"unavailabilityReason":"string"},"export":"string","exportCountries":{"dataSource":{"date":"string","source":"string"},"items":[{"code":"string","value":"string"}],"unavailabilityReason":"string"},"lastYearExportPercentage":"string","notAvailable":"string"}',
      description: ''
    },
    alertsCountDetails: {
      properties: {
        totalAlerts: { type: 'number' },
        contractId: { type: 'number' }
      },
      type: 'object',
      example: '{"contractId":107238,"totalAlerts":0}',
      description: ''
    },
    oBSAISResponse: {
      properties: {
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              fullBalanceSheet: {
                type: 'object',
                properties: {
                  unavailabilityReason: { type: 'string' },
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  }
                }
              },
              balanceInformation: {
                type: 'object',
                properties: {
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  period: { type: 'string' },
                  balanceType: {
                    type: 'object',
                    properties: { code: { type: 'string' } }
                  }
                }
              },
              fullIncomeStatement: {
                type: 'object',
                properties: {
                  unavailabilityReason: { type: 'string' },
                  accounts: {
                    items: {
                      type: 'object',
                      properties: {
                        balance: { type: 'string' },
                        description: {
                          type: 'object',
                          properties: {
                            code: { type: 'string' },
                            value: { type: 'string' }
                          }
                        }
                      }
                    },
                    type: 'array'
                  }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"wrapperYears":[{"balanceInformation":{"year":"2018","period":"6","balanceType":{"code":"02"},"documentLink":"https://desa.iberinform.es/RepositorioWs/api/v1.0/cuentas-imagen/oqmeb77qag3sbpv7oqbgz5voemloe63swrgdoje4"},"fullBalanceSheet":{"unavailabilityReason":"ND","accounts":[{"description":{"code":"2130015ES","value":"III.Reservas"},"balance":"9.061.870,40"},{"description":{"code":"1255015ES","value":"5.Otros activos financieros"},"balance":"25,00"},{"description":{"code":"2170015ES","value":"VII.Resultado del ejercicio"},"balance":"3.366.775,11"},{"description":{"code":"3260015ES","value":"VI.Periodificaciones a corto plazo"},"balance":"828.667,60"},{"description":{"code":"3220015ES","value":"II.Provisiones a corto plazo"},"balance":"110.000,00"},{"description":{"code":"3256015ES","value":"6.Otras deudas Administaciones P\u00fablicas"},"balance":"433.607,57"},{"description":{"code":"1110015ES","value":"I.Inmovilizado intangible"},"balance":"2.056.626,06"},{"description":{"code":"1231015ES","value":"1.Cli. ventas y prestaciones de servicios"},"balance":"1.114.492,01"},{"description":{"code":"1122015ES","value":"2.Instalaciones t\u00e9c. y otro inmo. material"},"balance":"204.891,51"},{"description":{"code":"1150015ES","value":"V.Inversiones finan. a largo plazo"},"balance":"8.498,50"},{"description":{"code":"1271015ES","value":"1.Tesorer\u00eda"},"balance":"13.381.063,29"},{"description":{"code":"2131015ES","value":"1.Legal y estatutarias"},"balance":"1.262.100,00"},{"description":{"code":"1232015ES","value":"2.Clientes empresas del grupo y asociadas"},"balance":"2.381.093,92"},{"description":{"code":"1260015ES","value":"VI.Periodificaciones a corto plazo"},"balance":"3.548,16"},{"description":{"code":"2100015ES","value":"A-1)Fondos propios"},"balance":"18.739.145,51"},{"description":{"code":"3230015ES","value":"III.Deudas a corto plazo"},"balance":"2.779,12"},{"description":{"code":"3254015ES","value":"4.Personal (remuneraciones pendnts. pago)"},"balance":"295.271,85"},{"description":{"code":"3000015ES","value":"TOTAL PATRIMONIO NETO Y PASIVO"},"balance":"21.783.536,55"},{"description":{"code":"1120015ES","value":"II.Inmovilizado material"},"balance":"204.891,51"},{"description":{"code":"1160015ES","value":"VI.Activos por impuesto diferido"},"balance":"200.909,06"},{"description":{"code":"3253015ES","value":"3.Acreedores varios"},"balance":"52.338,83"},{"description":{"code":"1000015ES","value":"TOTAL ACTIVO"},"balance":"21.783.536,55"},{"description":{"code":"1230015ES","value":"III.Deudores comer. cuentas a cobrar"},"balance":"3.500.496,17"},{"description":{"code":"1242015ES","value":"2.Cr\u00e9ditos a empresas"},"balance":"97.978,80"},{"description":{"code":"1270015ES","value":"VII.Efectivo/activos l\u00edquidos equiva."},"balance":"13.381.063,29"},{"description":{"code":"2110015ES","value":"I.Capital"},"balance":"6.310.500,00"},{"description":{"code":"3252015ES","value":"2.Proveedores, emp. del grupo y asociadas"},"balance":"226.213,84"},{"description":{"code":"3200015ES","value":"C)PASIVO CORRIENTE"},"balance":"3.044.391,04"},{"description":{"code":"1115015ES","value":"5.Aplicaciones inform\u00e1ticas"},"balance":"2.056.626,06"},{"description":{"code":"1200015ES","value":"B)ACTIVO CORRIENTE"},"balance":"16.983.111,42"},{"description":{"code":"1236015ES","value":"6.Otros cr\u00e9ditos Administraciones P\u00fablicas"},"balance":"4.910,24"},{"description":{"code":"2111015ES","value":"1.Capital escriturado"},"balance":"6.310.500,00"},{"description":{"code":"3235015ES","value":"5.Otros pasivos financieros"},"balance":"2.779,12"},{"description":{"code":"3251015ES","value":"1.Proveedores"},"balance":"1.094.176,40"},{"description":{"code":"1155015ES","value":"5.Otros activos financieros"},"balance":"8.498,50"},{"description":{"code":"1240015ES","value":"IV.Inver. emp. grupo y asociadas C.P."},"balance":"97.978,80"},{"description":{"code":"2132015ES","value":"2.Otras reservas"},"balance":"7.799.770,40"},{"description":{"code":"3250015ES","value":"V.Acreedores comer. cuentas a pagar"},"balance":"2.102.944,32"},{"description":{"code":"1100015ES","value":"A)ACTIVO NO CORRIENTE"},"balance":"4.800.425,13"},{"description":{"code":"1140015ES","value":"IV.Inver. emp. grupo y asoci. L.P."},"balance":"2.329.500,00"},{"description":{"code":"2000015ES","value":"A)PATRIMONIO NETO"},"balance":"18.739.145,51"},{"description":{"code":"3257015ES","value":"7.Anticipos de clientes"},"balance":"1.335,83"},{"description":{"code":"1141015ES","value":"1.Instrumentos de patrimonio"},"balance":"2.329.500,00"},{"description":{"code":"1250015ES","value":"V.Inversiones financieras a C.P."},"balance":"25,00"}]},"fullIncomeStatement":{"unavailabilityReason":"ND","accounts":[{"description":{"code":"4010015ES","value":"1.Importe neto cifra de negocios"},"balance":"23.113.850,36"},{"description":{"code":"4011015ES","value":"a)Ventas"},"balance":"23.081.398,76"},{"description":{"code":"4012015ES","value":"b)Prestaciones de servicios"},"balance":"32.451,60"},{"description":{"code":"4040015ES","value":"4.Aprovisionamientos"},"balance":"-10.375.802,74"},{"description":{"code":"4041015ES","value":"a)Consumo de mercader\u00edas"},"balance":"-10.370.376,07"},{"description":{"code":"4042015ES","value":"b)Consu. mat. primas/otras mat. consumble."},"balance":"-5.426,67"},{"description":{"code":"4060015ES","value":"6.Gastos de personal"},"balance":"-3.402.081,51"},{"description":{"code":"4061015ES","value":"a)Sueldos, salarios y asimilados"},"balance":"-2.472.992,99"},{"description":{"code":"4062015ES","value":"b)Cargas sociales"},"balance":"-929.088,52"},{"description":{"code":"4070015ES","value":"7.Otros gastos de explotaci\u00f3n"},"balance":"-4.400.353,59"},{"description":{"code":"4071015ES","value":"a)Servicios exteriores"},"balance":"-4.325.752,33"},{"description":{"code":"4072015ES","value":"b)Tributos"},"balance":"-14.949,61"},{"description":{"code":"4073015ES","value":"c)P\u00e9rd., deter./varia. provi. ope. comer."},"balance":"-59.651,65"},{"description":{"code":"4080015ES","value":"8.Amortizaci\u00f3n del inmovilizado"},"balance":"-1.013.709,41"},{"description":{"code":"4140015ES","value":"14.Ingresos financieros"},"balance":"10.614,42"},{"description":{"code":"4142015ES","value":"b)Valores negociables/otros instru. finan."},"balance":"10.614,42"},{"description":{"code":"4142215ES","value":"b2)De terceros"},"balance":"10.614,42"},{"description":{"code":"4190015ES","value":"20.Impuestos sobre beneficios"},"balance":"-565.742,42"},{"description":{"code":"4910015ES","value":"A.1)RESULTADO DE EXPLOTACI\u00d3N"},"balance":"3.921.903,11"},{"description":{"code":"4920015ES","value":"A.2)RESULTADO FINANCIERO"},"balance":"10.614,42"},{"description":{"code":"4930015ES","value":"A.3)RESULTADO ANTES DE IMPUESTOS"},"balance":"3.932.517,53"},{"description":{"code":"4940015ES","value":"A.4)RESUL. EJER. PROCED. OPER. CONTINUADAS"},"balance":"3.366.775,11"},{"description":{"code":"4950015ES","value":"A.5)RESULTADO DEL EJERCICIO"},"balance":"3.366.775,11"}]}},{"balanceInformation":{"year":"2017","period":"12","balanceType":{"code":"02"},"documentLink":"https://desa.iberinform.es/RepositorioWs/api/v1.0/cuentas-imagen/3dq655ul0tv93qghxidk2oeasel0slt8enmq48h2"},"fullBalanceSheet":{"unavailabilityReason":"ND","accounts":[{"description":{"code":"2130015ES","value":"III.Reservas"},"balance":"9.061.870,40"},{"description":{"code":"1255015ES","value":"5.Otros activos financieros"},"balance":"25,00"},{"description":{"code":"2170015ES","value":"VII.Resultado del ejercicio"},"balance":"3.366.775,11"},{"description":{"code":"3260015ES","value":"VI.Periodificaciones a corto plazo"},"balance":"828.667,60"},{"description":{"code":"3220015ES","value":"II.Provisiones a corto plazo"},"balance":"110.000,00"},{"description":{"code":"3256015ES","value":"6.Otras deudas Administaciones P\u00fablicas"},"balance":"433.607,57"},{"description":{"code":"1110015ES","value":"I.Inmovilizado intangible"},"balance":"2.056.626,06"},{"description":{"code":"1231015ES","value":"1.Cli. ventas y prestaciones de servicios"},"balance":"1.114.492,01"},{"description":{"code":"1122015ES","value":"2.Instalaciones t\u00e9c. y otro inmo. material"},"balance":"204.891,51"},{"description":{"code":"1150015ES","value":"V.Inversiones finan. a largo plazo"},"balance":"8.498,50"},{"description":{"code":"1271015ES","value":"1.Tesorer\u00eda"},"balance":"13.381.063,29"},{"description":{"code":"2131015ES","value":"1.Legal y estatutarias"},"balance":"1.262.100,00"},{"description":{"code":"1232015ES","value":"2.Clientes empresas del grupo y asociadas"},"balance":"2.381.093,92"},{"description":{"code":"1260015ES","value":"VI.Periodificaciones a corto plazo"},"balance":"3.548,16"},{"description":{"code":"2100015ES","value":"A-1)Fondos propios"},"balance":"18.739.145,51"},{"description":{"code":"3230015ES","value":"III.Deudas a corto plazo"},"balance":"2.779,12"},{"description":{"code":"3254015ES","value":"4.Personal (remuneraciones pendnts. pago)"},"balance":"295.271,85"},{"description":{"code":"3000015ES","value":"TOTAL PATRIMONIO NETO Y PASIVO"},"balance":"21.783.536,55"},{"description":{"code":"1120015ES","value":"II.Inmovilizado material"},"balance":"204.891,51"},{"description":{"code":"1160015ES","value":"VI.Activos por impuesto diferido"},"balance":"200.909,06"},{"description":{"code":"3253015ES","value":"3.Acreedores varios"},"balance":"52.338,83"},{"description":{"code":"1000015ES","value":"TOTAL ACTIVO"},"balance":"21.783.536,55"},{"description":{"code":"1230015ES","value":"III.Deudores comer. cuentas a cobrar"},"balance":"3.500.496,17"},{"description":{"code":"1242015ES","value":"2.Cr\u00e9ditos a empresas"},"balance":"97.978,80"},{"description":{"code":"1270015ES","value":"VII.Efectivo/activos l\u00edquidos equiva."},"balance":"13.381.063,29"},{"description":{"code":"2110015ES","value":"I.Capital"},"balance":"6.310.500,00"},{"description":{"code":"3252015ES","value":"2.Proveedores, emp. del grupo y asociadas"},"balance":"226.213,84"},{"description":{"code":"3200015ES","value":"C)PASIVO CORRIENTE"},"balance":"3.044.391,04"},{"description":{"code":"1115015ES","value":"5.Aplicaciones inform\u00e1ticas"},"balance":"2.056.626,06"},{"description":{"code":"1200015ES","value":"B)ACTIVO CORRIENTE"},"balance":"16.983.111,42"},{"description":{"code":"1236015ES","value":"6.Otros cr\u00e9ditos Administraciones P\u00fablicas"},"balance":"4.910,24"},{"description":{"code":"2111015ES","value":"1.Capital escriturado"},"balance":"6.310.500,00"},{"description":{"code":"3235015ES","value":"5.Otros pasivos financieros"},"balance":"2.779,12"},{"description":{"code":"3251015ES","value":"1.Proveedores"},"balance":"1.094.176,40"},{"description":{"code":"1155015ES","value":"5.Otros activos financieros"},"balance":"8.498,50"},{"description":{"code":"1240015ES","value":"IV.Inver. emp. grupo y asociadas C.P."},"balance":"97.978,80"},{"description":{"code":"2132015ES","value":"2.Otras reservas"},"balance":"7.799.770,40"},{"description":{"code":"3250015ES","value":"V.Acreedores comer. cuentas a pagar"},"balance":"2.102.944,32"},{"description":{"code":"1100015ES","value":"A)ACTIVO NO CORRIENTE"},"balance":"4.800.425,13"},{"description":{"code":"1140015ES","value":"IV.Inver. emp. grupo y asoci. L.P."},"balance":"2.329.500,00"},{"description":{"code":"2000015ES","value":"A)PATRIMONIO NETO"},"balance":"18.739.145,51"},{"description":{"code":"3257015ES","value":"7.Anticipos de clientes"},"balance":"1.335,83"},{"description":{"code":"1141015ES","value":"1.Instrumentos de patrimonio"},"balance":"2.329.500,00"},{"description":{"code":"1250015ES","value":"V.Inversiones financieras a C.P."},"balance":"25,00"}]},"fullIncomeStatement":{"unavailabilityReason":"ND","accounts":[{"description":{"code":"4010015ES","value":"1.Importe neto cifra de negocios"},"balance":"23.113.850,36"},{"description":{"code":"4011015ES","value":"a)Ventas"},"balance":"23.081.398,76"},{"description":{"code":"4012015ES","value":"b)Prestaciones de servicios"},"balance":"32.451,60"},{"description":{"code":"4040015ES","value":"4.Aprovisionamientos"},"balance":"-10.375.802,74"},{"description":{"code":"4041015ES","value":"a)Consumo de mercader\u00edas"},"balance":"-10.370.376,07"},{"description":{"code":"4042015ES","value":"b)Consu. mat. primas/otras mat. consumble."},"balance":"-5.426,67"},{"description":{"code":"4060015ES","value":"6.Gastos de personal"},"balance":"-3.402.081,51"},{"description":{"code":"4061015ES","value":"a)Sueldos, salarios y asimilados"},"balance":"-2.472.992,99"},{"description":{"code":"4062015ES","value":"b)Cargas sociales"},"balance":"-929.088,52"},{"description":{"code":"4070015ES","value":"7.Otros gastos de explotaci\u00f3n"},"balance":"-4.400.353,59"},{"description":{"code":"4071015ES","value":"a)Servicios exteriores"},"balance":"-4.325.752,33"},{"description":{"code":"4072015ES","value":"b)Tributos"},"balance":"-14.949,61"},{"description":{"code":"4073015ES","value":"c)P\u00e9rd., deter./varia. provi. ope. comer."},"balance":"-59.651,65"},{"description":{"code":"4080015ES","value":"8.Amortizaci\u00f3n del inmovilizado"},"balance":"-1.013.709,41"},{"description":{"code":"4140015ES","value":"14.Ingresos financieros"},"balance":"10.614,42"},{"description":{"code":"4142015ES","value":"b)Valores negociables/otros instru. finan."},"balance":"10.614,42"},{"description":{"code":"4142215ES","value":"b2)De terceros"},"balance":"10.614,42"},{"description":{"code":"4190015ES","value":"20.Impuestos sobre beneficios"},"balance":"-565.742,42"},{"description":{"code":"4910015ES","value":"A.1)RESULTADO DE EXPLOTACI\u00d3N"},"balance":"3.921.903,11"},{"description":{"code":"4920015ES","value":"A.2)RESULTADO FINANCIERO"},"balance":"10.614,42"},{"description":{"code":"4930015ES","value":"A.3)RESULTADO ANTES DE IMPUESTOS"},"balance":"3.932.517,53"},{"description":{"code":"4940015ES","value":"A.4)RESUL. EJER. PROCED. OPER. CONTINUADAS"},"balance":"3.366.775,11"},{"description":{"code":"4950015ES","value":"A.5)RESULTADO DEL EJERCICIO"},"balance":"3.366.775,11"}]}},{"balanceInformation":{"year":"2016","period":"12","balanceType":{"code":"02"},"documentLink":"https://desa.iberinform.es/RepositorioWs/api/v1.0/cuentas-imagen/zccuqhco2v4h6c4zr3hr0pc4xmch2gf7kj316qkg"},"fullBalanceSheet":{"accounts":[{"description":{"code":"2130009ES","value":"III.Reservas"},"balance":"5.692.242,82"},{"description":{"code":"1255009ES","value":"5.Otros activos financieros"},"balance":"5.000.391,78"},{"description":{"code":"2170009ES","value":"VII.Resultado del ejercicio"},"balance":"3.369.627,58"},{"description":{"code":"3260009ES","value":"VI.Periodificaciones a corto plazo"},"balance":"759.273,92"},{"description":{"code":"3256009ES","value":"6.Otras deudas Administraciones P\u00fablicas"},"balance":"246.375,20"},{"description":{"code":"1110009ES","value":"I.Inmovilizado intangible"},"balance":"2.292.049,47"},{"description":{"code":"1231009ES","value":"1.Cli. ventas y prestaciones de servicios"},"balance":"1.184.979,12"},{"description":{"code":"1122009ES","value":"2.Instalaciones t\u00e9c. y otro inmo. material"},"balance":"206.256,01"},{"description":{"code":"1150009ES","value":"V.Inversiones finan. a largo plazo"},"balance":"8.498,50"},{"description":{"code":"1271009ES","value":"1.Tesorer\u00eda"},"balance":"5.420.577,14"},{"description":{"code":"2131009ES","value":"1.Legal y estatutarias"},"balance":"1.262.100,00"},{"description":{"code":"1220009ES","value":"II.Existencias"},"balance":"38.984,34"},{"description":{"code":"1232009ES","value":"2.Clientes empresas del grupo y asociadas"},"balance":"2.112.735,03"},{"description":{"code":"1260009ES","value":"VI.Periodificaciones a corto plazo"},"balance":"37.285,68"},{"description":{"code":"2100009ES","value":"A-1)Fondos propios"},"balance":"15.372.370,40"},{"description":{"code":"3230009ES","value":"III.Deudas a corto plazo"},"balance":"289.466,49"},{"description":{"code":"3254009ES","value":"4.Personal (remuneraciones pendnts. pago)"},"balance":"270.892,46"},{"description":{"code":"3000009ES","value":"TOTAL PATRIMONIO NETO Y PASIVO"},"balance":"18.844.202,21"},{"description":{"code":"1120009ES","value":"II.Inmovilizado material"},"balance":"206.256,01"},{"description":{"code":"1160009ES","value":"VI.Activos por impuesto diferido"},"balance":"208.950,92"},{"description":{"code":"1226009ES","value":"6.Anticipos a proveedores"},"balance":"38.984,34"},{"description":{"code":"3253009ES","value":"3.Acreedores varios"},"balance":"37.657,33"},{"description":{"code":"1000009ES","value":"TOTAL ACTIVO"},"balance":"18.844.202,21"},{"description":{"code":"1230009ES","value":"III.Deudores comer. cuentas a cobrar"},"balance":"3.301.708,37"},{"description":{"code":"1270009ES","value":"VII.Efectivo/activos l\u00edquidos equiva."},"balance":"5.420.577,14"},{"description":{"code":"2110009ES","value":"I.Capital"},"balance":"6.310.500,00"},{"description":{"code":"3252009ES","value":"2.Proveedores, emp. del grupo y asociadas"},"balance":"234.005,32"},{"description":{"code":"3240009ES","value":"IV.Deudas emp. grupo y asociadas C.P."},"balance":"171.857,06"},{"description":{"code":"3200009ES","value":"C)PASIVO CORRIENTE"},"balance":"3.471.831,81"},{"description":{"code":"1115009ES","value":"5.Aplicaciones inform\u00e1ticas"},"balance":"2.292.049,47"},{"description":{"code":"1200009ES","value":"B)ACTIVO CORRIENTE"},"balance":"13.798.947,31"},{"description":{"code":"1236009ES","value":"6.Otros cr\u00e9ditos Administraciones P\u00fablicas"},"balance":"3.532,54"},{"description":{"code":"2111009ES","value":"1.Capital escriturado"},"balance":"6.310.500,00"},{"description":{"code":"3235009ES","value":"5.Otros pasivos financieros"},"balance":"289.466,49"},{"description":{"code":"3251209ES","value":"b)Proveedores a corto plazo"},"balance":"1.461.344,51"},{"description":{"code":"3251009ES","value":"1.Proveedores"},"balance":"1.461.344,51"},{"description":{"code":"1155009ES","value":"5.Otros activos financieros"},"balance":"8.498,50"},{"description":{"code":"2132009ES","value":"2.Otras reservas"},"balance":"4.430.142,82"},{"description":{"code":"3250009ES","value":"V.Acreedores comer. cuentas a pagar"},"balance":"2.251.234,34"},{"description":{"code":"1100009ES","value":"A)ACTIVO NO CORRIENTE"},"balance":"5.045.254,90"},{"description":{"code":"1140009ES","value":"IV.Inver. emp. grupo y asoci. L.P."},"balance":"2.329.500,00"},{"description":{"code":"1234009ES","value":"4.Personal"},"balance":"461,68"},{"description":{"code":"2000009ES","value":"A)PATRIMONIO NETO"},"balance":"15.372.370,40"},{"description":{"code":"3257009ES","value":"7.Anticipos de clientes"},"balance":"959,52"},{"description":{"code":"1141009ES","value":"1.Instrumentos de patrimonio"},"balance":"2.329.500,00"},{"description":{"code":"1250009ES","value":"V.Inversiones financieras a C.P."},"balance":"5.000.391,78"}]},"fullIncomeStatement":{"accounts":[{"description":{"code":"4010009ES","value":"1.Importe neto cifra de negocios"},"balance":"23.141.576,49"},{"description":{"code":"4011009ES","value":"a)Ventas"},"balance":"23.090.538,57"},{"description":{"code":"4012009ES","value":"b)Prestaciones de servicios"},"balance":"51.037,92"},{"description":{"code":"4040009ES","value":"4.Aprovisionamientos"},"balance":"-10.724.982,16"},{"description":{"code":"4041009ES","value":"a)Consumo de mercader\u00edas"},"balance":"-10.718.637,36"},{"description":{"code":"4042009ES","value":"b)Consu. mat. primas/otras mat. consumble."},"balance":"-6.344,80"},{"description":{"code":"4060009ES","value":"6.Gastos de personal"},"balance":"-3.334.133,46"},{"description":{"code":"4061009ES","value":"a)Sueldos, salarios y asimilados"},"balance":"-2.438.442,18"},{"description":{"code":"4062009ES","value":"b)Cargas sociales"},"balance":"-895.691,28"},{"description":{"code":"4070009ES","value":"7.Otros gastos de explotaci\u00f3n"},"balance":"-4.095.790,48"},{"description":{"code":"4071009ES","value":"a)Servicios exteriores"},"balance":"-3.865.173,30"},{"description":{"code":"4072009ES","value":"b)Tributos"},"balance":"-15.421,35"},{"description":{"code":"4073009ES","value":"c)P\u00e9rd., deter./varia. provi. ope. comer."},"balance":"-215.195,83"},{"description":{"code":"4080009ES","value":"8.Amortizaci\u00f3n del inmovilizado"},"balance":"-1.038.669,19"},{"description":{"code":"4100009ES","value":"10.Excesos de provisiones"},"balance":"30.000,00"},{"description":{"code":"4140009ES","value":"14.Ingresos financieros"},"balance":"17.190,84"},{"description":{"code":"4142009ES","value":"b)Valores negociables/otros instru. finan."},"balance":"17.190,84"},{"description":{"code":"4142209ES","value":"b 2)De terceros"},"balance":"17.190,84"},{"description":{"code":"4190009ES","value":"20.Impuestos sobre beneficios"},"balance":"-625.564,46"},{"description":{"code":"4910009ES","value":"A.1)RESULTADO DE EXPLOTACI\u00d3N"},"balance":"3.978.001,20"},{"description":{"code":"4920009ES","value":"A.2)RESULTADO FINANCIERO"},"balance":"17.190,84"},{"description":{"code":"4930009ES","value":"A.3)RESULTADO ANTES DE IMPUESTOS"},"balance":"3.995.192,04"},{"description":{"code":"4940009ES","value":"A.4)RESUL. EJER. PROCED. OPER. CONTINUADAS"},"balance":"3.369.627,58"},{"description":{"code":"4950009ES","value":"A.5)RESULTADO DEL EJERCICIO"},"balance":"3.369.627,58"}]}}]}',
      description: ''
    },
    ordinaryFinancialConnectionDetail: {
      properties: {
        notAvailable: { type: 'string' },
        shareholders: {
          type: 'object',
          properties: {
            elements: {
              items: {
                type: 'object',
                properties: {
                  legalForm: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  nonPaymentRating: { type: 'string' },
                  name: { type: 'string' },
                  country: { type: 'string' },
                  percentage: { type: 'string' },
                  taxId: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        investeeCompanies: {
          type: 'object',
          properties: {
            elements: {
              items: {
                type: 'object',
                properties: {
                  nonPaymentRating: { type: 'string' },
                  name: { type: 'string' },
                  taxId: { type: 'string' },
                  legalForm: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  indirectHolding: { type: 'string' },
                  holdingPercentage: { type: 'string' },
                  directHolding: { type: 'string' },
                  type: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"investeeCompanies":{"dataSource":{"date":"string","source":"string"},"elements":[{"directHolding":"string","holdingPercentage":"string","indirectHolding":"string","legalForm":{"code":"string","value":"string"},"name":"string","nonPaymentRating":"string","taxId":"string","type":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"notAvailable":"string","shareholders":{"dataSource":{"date":"string","source":"string"},"elements":[{"country":"string","legalForm":{"code":"string","value":"string"},"name":"string","nonPaymentRating":"string","percentage":"string","taxId":"string"}],"unavailabilityReason":"string"}}',
      description: ''
    },
    DefLegProcDetails: {
      properties: {
        claims: {
          items: { type: 'object', properties: {} },
          type: 'array'
        },
        claimsNumber: { type: 'number' }
      },
      type: 'object',
      example: '{"claims":[{}],"claimsNumber":0}',
      description: ''
    },
    organisationSearchResult: {
      required: ['baseRequest', 'count', 'organisations'],
      properties: {
        count: {
          type: 'integer',
          description: 'N\u00famero de empresas localizadas',
          format: 'int32'
        },
        organisations: {
          description:
            'Listado que contiene las empresas que cumplen los criterios de la petici\u00f3n',
          $ref: '#/definitions/organisationsArray'
        },
        baseRequest: {
          description: 'BaseRequest',
          $ref: '#/definitions/baseRequest'
        }
      }
    },
    EmpDetail: {
      properties: {
        totalLongTermEmployeesRaw: { type: 'number' },
        totalEventualesRaw: { type: 'number' },
        totalTemporaryEmployees: { type: 'string' },
        employeesEvolution: { type: 'string' },
        functionalManagers: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  firstSurname: { type: 'string' },
                  secondSurname: { type: 'string' },
                  name: { type: 'string' },
                  positionDescription: { type: 'string' },
                  positions: {
                    type: 'object',
                    properties: {
                      items: {
                        items: { type: 'string' },
                        type: 'array'
                      },
                      unavailabilityReason: { type: 'string' }
                    }
                  }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' }
          }
        },
        notAvailable: { type: 'string' },
        totalEmployees: { type: 'string' },
        totalFixedTermEmployees: { type: 'string' }
      },
      type: 'object',
      example:
        '{"employeesEvolution":"string","functionalManagers":{"items":[{"firstSurname":"string","name":"string","positionDescription":"string","positions":{"items":["string"],"unavailabilityReason":"string"},"secondSurname":"string"}],"unavailabilityReason":"string"},"notAvailable":"string","totalEmployees":"string","totalEventualesRaw":0,"totalFixedTermEmployees":"string","totalLongTermEmployeesRaw":0,"totalTemporaryEmployees":"string"}',
      description: ''
    },
    rankingData: {
      properties: {
        capacity: { type: 'number' },
        language: { type: 'string' },
        symbol: { type: 'string' },
        rankingType: { type: 'string' },
        content: {
          items: {
            type: 'object',
            properties: {
              province: { type: 'string' },
              name: { type: 'string' },
              webDescription: { type: 'string' },
              companyID: { type: 'number' },
              country: { type: 'string' },
              locality: { type: 'string' },
              rankingValue: { type: 'string' },
              tradeName: { type: 'string' },
              fullName: { type: 'string' }
            }
          },
          type: 'array'
        },
        date: { type: 'string' },
        total: { type: 'number' },
        page: { type: 'number' }
      },
      type: 'object',
      example:
        '{"rankingType":"01","capacity":10,"language":"ES","page":0,"total":1000,"date":"05-12-2019 15:55:06.0","symbol":"\u20ac","content":[{"companyID":6334608,"webDescription":"wire-technologies","name":"WIRE TECHNOLOGIES","fullName":"WIRE TECHNOLOGIES SL","tradeName":"WITECH","country":"ESPA\u00d1A","province":"BARCELONA","locality":"GRANOLLERS","rankingValue":" 1.497.900.320.000,00"},{"companyID":6743430,"webDescription":"artesanos-de-la-madera-de-toledo","name":"ARTESANOS DE LA MADERA DE TOLEDO","fullName":"ARTESANOS DE LA MADERA DE TOLEDO SLL","tradeName":"AMT","country":"ESPA\u00d1A","province":"TOLEDO","locality":"VILLACA\u00d1AS","rankingValue":" 957.633.590.000,00"},{"companyID":141417,"webDescription":"ifco-systems-espana","name":"IFCO SYSTEMS ESPA\u00d1A","fullName":"IFCO SYSTEMS ESPA\u00d1A SL","country":"ESPA\u00d1A","province":"VALENCIA","locality":"PICASSENT","rankingValue":" 141.083.509.000,00"},{"companyID":3998567,"webDescription":"antonio-guillin-luana-y-rogelio-dono-pampin","name":"ANTONIO GUILLIN LUA\u00d1A Y ROGELIO DONO PAMPIN","fullName":"ANTONIO GUILLIN LUA\u00d1A Y ROGELIO DONO PAMPIN Sociedad Civil","country":"ESPA\u00d1A","province":"CORU\u00d1A (A)","locality":"OLEIROS","rankingValue":" 135.000.135.000,00"},{"companyID":6213959,"webDescription":"suministros-industriales-mahofri","name":"SUMINISTROS INDUSTRIALES MAHOFRI","fullName":"SUMINISTROS INDUSTRIALES MAHOFRI SL","country":"ESPA\u00d1A","province":"ALICANTE","locality":"ELCHE","rankingValue":" 61.411.530.000,00"},{"companyID":1994945,"webDescription":"metalab-2010","name":"METALAB 2010","fullName":"METALAB 2010 SL","country":"ESPA\u00d1A","province":"MADRID","locality":"POZUELO DE ALARCON","rankingValue":" 33.000.000.000,00"},{"companyID":6532265,"webDescription":"taoufik-bahdaoui","name":"TAOUFIK BAHDAOUI","fullName":"TAOUFIK BAHDAOUI","tradeName":"LA TIENDA CHOLLOS","country":"ESPA\u00d1A","province":"CIUDAD REAL","locality":"DAIMIEL","rankingValue":" 28.851.326.680,00"},{"companyID":611505,"webDescription":"autocares-carrasco","name":"AUTOCARES CARRASCO","fullName":"AUTOCARES CARRASCO SL","country":"ESPA\u00d1A","province":"MALAGA","locality":"CAMPILLOS","rankingValue":" 28.851.326.680,00"},{"companyID":63770,"webDescription":"mercadona","name":"MERCADONA","fullName":"MERCADONA SA","country":"ESPA\u00d1A","province":"VALENCIA","locality":"TAVERNES BLANQUES","rankingValue":" 19.059.157.000,00"},{"companyID":2265953,"webDescription":"repsol-petroleo","name":"REPSOL PETROLEO","fullName":"REPSOL PETROLEO SA","tradeName":"REPSOL","country":"ESPA\u00d1A","province":"MADRID","locality":"MADRID","rankingValue":" 18.344.171.000,00"}]}',
      description: ''
    },
    TradeDetail: {
      properties: {
        registros_nombres_comerciales: {
          type: 'object',
          properties: {
            registro: {
              items: {
                type: 'object',
                properties: {
                  fecha_solicitud: { type: 'string' },
                  ruta_imagen: { type: 'string' },
                  fecha_renovacion: { type: 'string' },
                  claves_niza: {
                    type: 'object',
                    properties: {
                      registro: {
                        items: {
                          type: 'object',
                          properties: {
                            actividad: { type: 'string' },
                            clave: { type: 'string' }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  expediente: { type: 'string' },
                  calificador: { type: 'string' },
                  nombre: { type: 'string' },
                  fecha_actualizacion: { type: 'string' },
                  estado: { type: 'string' },
                  fecha_concesion: { type: 'string' }
                }
              },
              type: 'array'
            }
          }
        },
        nd: { type: 'string' },
        registros_marcas: {
          type: 'object',
          properties: {
            registro: {
              items: {
                type: 'object',
                properties: {
                  fecha_solicitud: { type: 'string' },
                  ruta_imagen: { type: 'string' },
                  fecha_renovacion: { type: 'string' },
                  claves_niza: {
                    type: 'object',
                    properties: {
                      registro: {
                        items: {
                          type: 'object',
                          properties: {
                            actividad: { type: 'string' },
                            clave: { type: 'string' }
                          }
                        },
                        type: 'array'
                      }
                    }
                  },
                  expediente: { type: 'string' },
                  calificador: { type: 'string' },
                  nombre: { type: 'string' },
                  fecha_actualizacion: { type: 'string' },
                  estado: { type: 'string' },
                  fecha_concesion: { type: 'string' }
                }
              },
              type: 'array'
            }
          }
        }
      },
      type: 'object',
      example:
        '{"nd":"string","registros_marcas":{"registro":[{"calificador":"string","claves_niza":{"registro":[{"actividad":"string","clave":"string"}]},"estado":"string","expediente":"string","fecha_actualizacion":"string","fecha_concesion":"string","fecha_renovacion":"string","fecha_solicitud":"string","nombre":"string","ruta_imagen":"string"}]},"registros_nombres_comerciales":{"registro":[{"calificador":"string","claves_niza":{"registro":[{"actividad":"string","clave":"string"}]},"estado":"string","expediente":"string","fecha_actualizacion":"string","fecha_concesion":"string","fecha_renovacion":"string","fecha_solicitud":"string","nombre":"string","ruta_imagen":"string"}]}}',
      description: ''
    },
    subscriptionDetails: {
      properties: {
        cpvs: { type: 'string' },
        awardeeIdentifier: { type: 'string' },
        awarderIdentifier: { type: 'string' },
        language: { type: 'string' },
        minAmount: { type: 'number' },
        userId: { type: 'number' },
        awarderIdentifierType: { type: 'string' },
        awardeeIdentifierType: { type: 'string' },
        alias: { type: 'string' },
        query: { type: 'string' },
        id: { type: 'number' },
        scope: { type: 'string' },
        email: { type: 'string' },
        maxAmount: {}
      },
      type: 'object',
      example:
        '{"id":48,"userId":255,"query":"maderas","scope":"","cpvs":"","minAmount":5,"maxAmount":null,"email":"email@email.com","alias":"maderas","language":"es"}',
      description: ''
    },
    address: {
      required: ['city', 'country', 'countrySubident', 'postCode', 'street'],
      properties: {
        country: { type: 'string', description: 'Pa\u00eds' },
        city: { type: 'string', description: 'Municipio' },
        street: { type: 'string', description: 'Calle' },
        postCode: { type: 'string', description: 'C\u00f3digo postal' },
        countrySubident: { type: 'string', description: 'Provincia' }
      }
    },
    internal_rankingData: {
      properties: {
        capacity: { type: 'number' },
        language: { type: 'string' },
        symbol: { type: 'string' },
        rankingType: { type: 'string' },
        content: {
          items: {
            type: 'object',
            properties: {
              province: { type: 'string' },
              name: { type: 'string' },
              webDescription: { type: 'string' },
              locality: { type: 'string' },
              country: { type: 'string' },
              firmid: { type: 'number' },
              rankingValue: { type: 'string' },
              tradeName: { type: 'string' },
              fullName: { type: 'string' }
            }
          },
          $ref: '#/definitions/internal_ContentArray'
        },
        date: { type: 'string' },
        total: { type: 'number' },
        page: { type: 'number' }
      },
      type: 'object',
      example:
        '{"rankingType":"01","capacity":10,"language":"ES","page":0,"total":1000,"date":"05-12-2019 15:55:06.0","symbol":"\u20ac","content":[{"firmid":6334608,"webDescription":"wire-technologies","name":"WIRE TECHNOLOGIES","fullName":"WIRE TECHNOLOGIES SL","tradeName":"WITECH","country":"ESPA\u00d1A","province":"BARCELONA","locality":"GRANOLLERS","rankingValue":" 1.497.900.320.000,00"},{"firmid":6743430,"webDescription":"artesanos-de-la-madera-de-toledo","name":"ARTESANOS DE LA MADERA DE TOLEDO","fullName":"ARTESANOS DE LA MADERA DE TOLEDO SLL","tradeName":"AMT","country":"ESPA\u00d1A","province":"TOLEDO","locality":"VILLACA\u00d1AS","rankingValue":" 957.633.590.000,00"},{"firmid":141417,"webDescription":"ifco-systems-espana","name":"IFCO SYSTEMS ESPA\u00d1A","fullName":"IFCO SYSTEMS ESPA\u00d1A SL","country":"ESPA\u00d1A","province":"VALENCIA","locality":"PICASSENT","rankingValue":" 141.083.509.000,00"},{"firmid":3998567,"webDescription":"antonio-guillin-luana-y-rogelio-dono-pampin","name":"ANTONIO GUILLIN LUA\u00d1A Y ROGELIO DONO PAMPIN","fullName":"ANTONIO GUILLIN LUA\u00d1A Y ROGELIO DONO PAMPIN Sociedad Civil","country":"ESPA\u00d1A","province":"CORU\u00d1A (A)","locality":"OLEIROS","rankingValue":" 135.000.135.000,00"},{"firmid":6213959,"webDescription":"suministros-industriales-mahofri","name":"SUMINISTROS INDUSTRIALES MAHOFRI","fullName":"SUMINISTROS INDUSTRIALES MAHOFRI SL","country":"ESPA\u00d1A","province":"ALICANTE","locality":"ELCHE","rankingValue":" 61.411.530.000,00"},{"firmid":1994945,"webDescription":"metalab-2010","name":"METALAB 2010","fullName":"METALAB 2010 SL","country":"ESPA\u00d1A","province":"MADRID","locality":"POZUELO DE ALARCON","rankingValue":" 33.000.000.000,00"},{"firmid":6532265,"webDescription":"taoufik-bahdaoui","name":"TAOUFIK BAHDAOUI","fullName":"TAOUFIK BAHDAOUI","tradeName":"LA TIENDA CHOLLOS","country":"ESPA\u00d1A","province":"CIUDAD REAL","locality":"DAIMIEL","rankingValue":" 28.851.326.680,00"},{"firmid":611505,"webDescription":"autocares-carrasco","name":"AUTOCARES CARRASCO","fullName":"AUTOCARES CARRASCO SL","country":"ESPA\u00d1A","province":"MALAGA","locality":"CAMPILLOS","rankingValue":" 28.851.326.680,00"},{"firmid":63770,"webDescription":"mercadona","name":"MERCADONA","fullName":"MERCADONA SA","country":"ESPA\u00d1A","province":"VALENCIA","locality":"TAVERNES BLANQUES","rankingValue":" 19.059.157.000,00"},{"firmid":2265953,"webDescription":"repsol-petroleo","name":"REPSOL PETROLEO","fullName":"REPSOL PETROLEO SA","tradeName":"REPSOL","country":"ESPA\u00d1A","province":"MADRID","locality":"MADRID","rankingValue":" 18.344.171.000,00"}]}',
      description: ''
    },
    OGOMRDDetail: {
      properties: {
        notAvailable: { type: 'string' },
        registeredActs: {
          items: {
            type: 'object',
            properties: {
              description: { type: 'string' },
              reference: { type: 'string' },
              datePublished: { type: 'string' },
              bulletinNumber: { type: 'string' },
              registrationNumber: { type: 'string' },
              year: { type: 'string' },
              subActs: {
                items: {
                  type: 'object',
                  properties: {
                    code: { type: 'string' },
                    value: { type: 'string' }
                  }
                },
                type: 'array'
              },
              registrationDate: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"notAvailable":"string","registeredActs":[{"bulletinNumber":"string","datePublished":"string","description":"string","reference":"string","registrationDate":"string","registrationNumber":"string","subActs":[{"code":"string","value":"string"}],"year":"string"}]}',
      description: ''
    },
    defenbankruptcyProceedingsIDDetail: {
      properties: {
        courtType: { type: 'string' },
        rating: { type: 'string' },
        assetsAmount: { type: 'string' },
        proceeding: { type: 'string' },
        orderNumber: { type: 'string' },
        defendants: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        },
        courtNumber: { type: 'number' },
        status: { type: 'string' },
        publications: {
          items: {
            type: 'object',
            properties: {
              media: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  value: { type: 'string' }
                }
              },
              datePublished: { type: 'string' }
            }
          },
          type: 'array'
        },
        proceedingDate: { type: 'string' },
        statusDate: { type: 'string' },
        liabilitiesAmount: { type: 'string' },
        plaintiffs: {
          items: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                properties: {
                  province: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  town: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  urbanArea: { type: 'string' },
                  streetType: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  country: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  fullAddress: { type: 'string' },
                  otherDetails: { type: 'string' },
                  number: { type: 'string' },
                  dateUntil: { type: 'string' },
                  streetName: { type: 'string' },
                  postcode: { type: 'string' }
                }
              },
              taxId: { type: 'string' },
              companyName: { type: 'string' }
            }
          },
          type: 'array'
        },
        statusHistory: {
          items: {
            type: 'object',
            properties: {
              fecha: { type: 'string' },
              estado: { type: 'string' }
            }
          },
          type: 'array'
        },
        courtTown: {
          type: 'object',
          properties: {
            code: { type: 'string' },
            value: { type: 'string' }
          }
        }
      },
      type: 'object',
      example:
        '{"assetsAmount":"string","courtNumber":0,"courtTown":{"code":"string","value":"string"},"courtType":"string","defendants":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-07T09:48:48.736Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"liabilitiesAmount":"string","orderNumber":"string","plaintiffs":[{"address":{"country":{"code":"string","value":"string"},"dateUntil":"2019-10-07T09:48:48.736Z","fullAddress":"string","number":"string","otherDetails":"string","postcode":"string","province":{"code":"string","value":"string"},"streetName":"string","streetType":{"code":"string","value":"string"},"town":{"code":"string","value":"string"},"urbanArea":"string"},"companyName":"string","taxId":"string"}],"proceeding":"string","proceedingDate":"string","publications":[{"datePublished":"string","media":{"code":"string","value":"string"}}],"rating":"string","status":"string","statusDate":"string","statusHistory":[{"estado":"string","fecha":"string"}]}',
      description: ''
    },
    CBEODetail: {
      properties: {
        registro: {
          items: {
            type: 'object',
            properties: {
              cargo: {
                type: 'object',
                properties: {
                  codigo: { type: 'string' },
                  valor: { type: 'string' }
                }
              },
              denominacion: { type: 'string' },
              fecha: { type: 'object', properties: {} }
            }
          },
          type: 'array'
        },
        nd: { type: 'string' }
      },
      type: 'object',
      example:
        '{"nd":"string","registro":[{"cargo":{"codigo":"string","valor":"string"},"denominacion":"string","fecha":{}}]}',
      description: ''
    },
    orgStatus: {
      required: ['statusCode', 'statusDate', 'statusDesc'],
      properties: {
        statusDate: { type: 'string', description: 'Fecha' },
        statusDesc: { type: 'string', description: 'Descripci\u00f3n' },
        statusCode: { type: 'string', description: 'C\u00f3digo' }
      }
    },
    DPIBEODetail: {
      properties: {
        textoCuentasBORME: {
          type: 'object',
          properties: {
            codigo: { type: 'string' },
            valor: { type: 'string' }
          }
        },
        nd: { type: 'string' },
        actos_inscritos: {
          type: 'object',
          properties: {
            listado: {
              items: {
                type: 'object',
                properties: {
                  subActos: {
                    items: {
                      type: 'object',
                      properties: {
                        codigo: { type: 'string' },
                        valor: { type: 'string' }
                      }
                    },
                    type: 'array'
                  },
                  fechaPublicacion: { type: 'string' },
                  numeroSubActos: { type: 'number' }
                }
              },
              type: 'array'
            }
          }
        },
        deposito_cuentas: {
          type: 'object',
          properties: {
            registro: {
              items: {
                type: 'object',
                properties: {
                  codigoTipoCuenta: { type: 'string' },
                  fechaPublicacion: { type: 'string' },
                  anyoCuenta: { type: 'string' },
                  fechaDeposito: { type: 'string' }
                }
              },
              type: 'array'
            }
          }
        }
      },
      type: 'object',
      example:
        '{"actos_inscritos":{"listado":[{"fechaPublicacion":"string","numeroSubActos":0,"subActos":[{"codigo":"string","valor":"string"}]}]},"deposito_cuentas":{"registro":[{"anyoCuenta":"string","codigoTipoCuenta":"string","fechaDeposito":"string","fechaPublicacion":"string"}]},"nd":"string","textoCuentasBORME":{"codigo":"string","valor":"string"}}',
      description: ''
    },
    activityDetail: {
      properties: {
        activities: {
          items: {
            type: 'object',
            properties: {
              code: { type: 'string' },
              type: { type: 'string' },
              description: { type: 'string' }
            }
          },
          type: 'array'
        },
        startYear: { type: 'string' },
        expectedStartDate: { type: 'string' },
        franchises: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  commercialTitle: { type: 'string' },
                  establishmentNumber: { type: 'string' },
                  franchiseName: {
                    type: 'object',
                    properties: {
                      countryCode: { type: 'string' },
                      companyName: { type: 'string' }
                    }
                  }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' }
          }
        },
        managerExperience: {
          type: 'object',
          properties: {
            managerExperienceType: { type: 'string' },
            previousExperienceRating: { type: 'string' }
          }
        },
        exclusiveDistributor: { type: 'string' },
        activityDescription: { type: 'string' },
        companyExperience: {
          type: 'object',
          properties: {
            experienceReason: { type: 'string' },
            experienceRating: { type: 'string' },
            experienceCompanyName: {
              type: 'object',
              properties: {
                countryCode: { type: 'string' },
                companyName: { type: 'string' }
              }
            }
          }
        },
        incorporated: { type: 'string' },
        notAvailable: { type: 'string' }
      },
      type: 'object',
      example:
        '{"activities":[{"code":"string","description":"string","type":"string"}],"activityDescription":"string","companyExperience":{"experienceCompanyName":{"companyName":"string","countryCode":"string"},"experienceRating":"string","experienceReason":"string"},"exclusiveDistributor":"string","expectedStartDate":"string","franchises":{"items":[{"commercialTitle":"string","establishmentNumber":"string","franchiseName":{"companyName":"string","countryCode":"string"}}],"unavailabilityReason":"string"},"incorporated":"string","managerExperience":{"managerExperienceType":"string","previousExperienceRating":"string"},"notAvailable":"string","startYear":"string"}',
      description: ''
    },
    internal_ContentArray: {
      items: { $ref: '#/definitions/internal_Content' },
      type: 'array'
    },
    OCFDetail: {
      properties: {
        wrapperYears: {
          items: {
            type: 'object',
            properties: {
              accountsWrapper: {
                type: 'object',
                properties: { unavailabilityReason: { type: 'string' } }
              },
              balanceInformation: {
                type: 'object',
                properties: {
                  startDate: { type: 'string' },
                  documentLink: { type: 'string' },
                  year: { type: 'string' },
                  closeDate: { type: 'string' }
                }
              }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"wrapperYears":[{"balanceInformation":{"year":"2013","startDate":"01-01-2013","closeDate":"31-12-2013","documentLink":"https://desa.iberinform.es/RepositorioWs/api/v1.0/cuentas-imagen/89-3-ICM7-cmlseol10-Permanente59-26-A1001001A14H19B71845H3087318-A14H19B71845H308731-14-1019"},"accountsWrapper":{"unavailabilityReason":"NF"}}]}',
      description: ''
    },
    consolidatedFinancialConnectionDetail: {
      properties: {
        notAvailable: { type: 'string' },
        shareholders: {
          type: 'object',
          properties: {
            elements: {
              items: {
                type: 'object',
                properties: {
                  legalForm: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  nonPaymentRating: { type: 'string' },
                  name: { type: 'string' },
                  country: { type: 'string' },
                  percentage: { type: 'string' },
                  taxId: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        investeeCompanies: {
          type: 'object',
          properties: {
            elements: {
              items: {
                type: 'object',
                properties: {
                  nonPaymentRating: { type: 'string' },
                  name: { type: 'string' },
                  taxId: { type: 'string' },
                  legalForm: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  },
                  indirectHolding: { type: 'string' },
                  holdingPercentage: { type: 'string' },
                  directHolding: { type: 'string' },
                  type: {
                    type: 'object',
                    properties: {
                      code: { type: 'string' },
                      value: { type: 'string' }
                    }
                  }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"investeeCompanies":{"dataSource":{"date":"string","source":"string"},"elements":[{"directHolding":"string","holdingPercentage":"string","indirectHolding":"string","legalForm":{"code":"string","value":"string"},"name":"string","nonPaymentRating":"string","taxId":"string","type":{"code":"string","value":"string"}}],"unavailabilityReason":"string"},"notAvailable":"string","shareholders":{"dataSource":{"date":"string","source":"string"},"elements":[{"country":"string","legalForm":{"code":"string","value":"string"},"name":"string","nonPaymentRating":"string","percentage":"string","taxId":"string"}],"unavailabilityReason":"string"}}',
      description: ''
    },
    alertsTypesDetails: {
      properties: {
        totalAlertTypes: {},
        alertsTypes: {
          items: {
            type: 'object',
            properties: {
              typeID: { type: 'number' },
              reportingMode: { type: 'string' },
              payLoad: {
                type: 'object',
                properties: {
                  numRegs: { type: 'number' },
                  changeDate: { type: 'string' },
                  fileName: { type: 'string' }
                }
              },
              typeDescription: { type: 'string' }
            }
          },
          type: 'array'
        }
      },
      type: 'object',
      example:
        '{"alertsTypes":[{"typeID":1,"typeDescription":"Masivo","reportingMode":"MASSIVE","payLoad":{"fileName":"Massive alert file name","numRegs":0,"changeDate":"2020-02-58 13:15:11"}},{"typeID":2,"typeDescription":"CNAE","reportingMode":"UNITARY","payLoad":{"companyId":0,"previousValue":"Previous value of the field monitorized","previousDescription":"Previous description  of the field monitorized","currentValue":"Current value of the field monitorized","currentDescription":"Current description of the field monitorized","changeDate":"2020-02-58 13:15:11"}},{"typeID":3,"typeDescription":"Telefono","reportingMode":"UNITARY","payLoad":{"companyId":0,"previousValue":"Previous value of the field monitorized","previousDescription":"Previous description  of the field monitorized","currentValue":"Current value of the field monitorized","currentDescription":"Current description of the field monitorized","changeDate":"2020-02-58 13:15:11"}},{"typeID":4,"typeDescription":"Forma Jur\u00eddica","reportingMode":"UNITARY","payLoad":{"companyId":0,"previousValue":"Previous value of the field monitorized","previousDescription":"Previous description  of the field monitorized","currentValue":"Current value of the field monitorized","currentDescription":"Current description of the field monitorized","changeDate":"2020-02-58 13:15:11"}},{"typeID":5,"typeDescription":"Razon Social","reportingMode":"UNITARY","payLoad":{"companyId":0,"previousValue":"Previous value of the field monitorized","previousDescription":"Previous description  of the field monitorized","currentValue":"Current value of the field monitorized","currentDescription":"Current description of the field monitorized","changeDate":"2020-02-58 13:15:11"}}],"totalAlertTypes":null}',
      description: ''
    },
    identifierType: {
      properties: {
        country: { type: 'string' },
        identifierType: { type: 'string' }
      },
      type: 'object',
      example: '{"country":"string","identifierType":"string"}',
      description: ''
    },
    CBDetail: {
      properties: {
        currentCompanyBodies: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  relationships: { type: 'string' },
                  position: { type: 'string' },
                  appointmentDate: { type: 'string' },
                  name: { type: 'string' },
                  terminationDate: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        },
        notAvailable: { type: 'string' },
        history: {
          type: 'object',
          properties: {
            items: {
              items: {
                type: 'object',
                properties: {
                  relationships: { type: 'string' },
                  position: { type: 'string' },
                  appointmentDate: { type: 'string' },
                  name: { type: 'string' },
                  terminationDate: { type: 'string' }
                }
              },
              type: 'array'
            },
            unavailabilityReason: { type: 'string' },
            dataSource: {
              type: 'object',
              properties: {
                date: { type: 'string' },
                source: { type: 'string' }
              }
            }
          }
        }
      },
      type: 'object',
      example:
        '{"currentCompanyBodies":{"dataSource":{"date":"string","source":"string"},"items":[{"appointmentDate":"string","name":"string","position":"string","relationships":"string","terminationDate":"string"}],"unavailabilityReason":"string"},"history":{"dataSource":{"date":"string","source":"string"},"items":[{"appointmentDate":"string","name":"string","position":"string","relationships":"string","terminationDate":"string"}],"unavailabilityReason":"string"},"notAvailable":"string"}',
      description: ''
    },
    bankruptcyDetail: {
      properties: {
        claims: {
          items: { type: 'object', properties: {} },
          type: 'array'
        },
        claimsNumber: { type: 'number' }
      },
      type: 'object',
      example: '{"claims":[{}],"claimsNumber":0}',
      description: ''
    },
    defenbankruptcyProceedingsDetail: {
      properties: {
        claims: {
          items: { type: 'object', properties: {} },
          type: 'array'
        },
        claimsNumber: { type: 'number' }
      },
      type: 'object',
      example: '{"claims":[{}],"claimsNumber":0}',
      description: ''
    }
  },
  security: [{ ClientSecretHeader: [], APIKeyHeader: [] }],
  swagger: '2.0',
  'x-ibm-configuration': {
    phase: 'realized',
    enforced: true,
    testable: true,
    cors: { enabled: true }
  },
  consumes: ['application/json']
}
