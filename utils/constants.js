export const INPUT_INFO = [
  {
    labelText: 'Nombre',
    id: 'name',
    type: 'text',
    placeholder: 'Introduzca el nombre...'
  },
  {
    labelText: 'X-IBM-CLIENT-ID',
    id: 'clientID',
    type: 'text',
    placeholder: 'Introduzca el Client-ID...'
  },
  {
    labelText: 'X-IBM-CLIENT-SECRET',
    id: 'clientSecret',
    type: 'text',
    placeholder: 'Introduzca el Client-Secret...'
  },
  {
    labelText: 'Contrato',
    id: 'num',
    type: 'text',
    placeholder: 'Num de contrato...'
  }
]

export const FILE_TEMPLATE = {
  swagger: '2.0',
  info: {
    'x-ibm-name': 'iberinformapis',
    title: 'IberinformApis',
    version: '1.0.0',
    contact: {
      name: 'Iberinform',
      url: 'https://www.iberinform.es/',
      email: 'api.support@iberinform.es'
    }
  },
  schemes: ['https'],
  host: '---',
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    APIKeyHeader: {
      type: 'apiKey',
      in: 'header',
      name: 'X-IBM-Client-Id'
    },
    ClientSecretHeader: {
      type: 'apiKey',
      in: 'header',
      name: 'X-IBM-Client-Secret',
      description: 'Unique token directly related to the client contract'
    }
  },
  security: [
    {
      APIKeyHeader: [],
      ClientSecretHeader: []
    }
  ],
  tags: [],
  paths: '---',
  definitions: '---',
  basePath: '/',
  'x-ibm-configuration': {
    enforced: true,
    testable: true,
    phase: 'realized',
    cors: {
      enabled: true
    }
  }
}

export const REF_REGEX = new RegExp(/"\$ref":"#\/definitions\/[\w]*"/gm)

export const DB_PATHS = {
  endPoints: 'paths',
  definitions: 'definitions'
}

export const TAGS_LIST = {
  Identification: {
    name: 'Identification',
    description: 'Identification data about the organisations'
  },
  CompanyData: {
    name: 'Company Data',
    description: 'Company data about the organisations'
  },
  TradingData: {
    name: 'Trading Data',
    description: 'Trading data about organisations'
  },
  FinancialData: {
    name: 'Financial Data',
    description: 'Financial data about the organisations'
  },
  Incidents: {
    name: 'Incidents',
    description: 'Incidents data about the organisations'
  },
  RiskAnalysis: {
    name: 'Risk Analysis',
    description: 'Risk Analysis data about the organisations'
  },
  ProductReports: {
    name: 'Product Reports',
    description: 'Product Reports'
  },
  Companies: {
    name: 'Companies',
    description: 'Methods for search organisations'
  },
  Rankings: {
    name: 'Rankings',
    description: 'Rankings data about the organisations'
  },
  Tenders: {
    name: 'Tenders',
    description: 'Information about Tenders'
  },
  Alerts: {
    name: 'Alerts',
    description: 'Methods for alerts'
  }
}

export function formatJSONForPostman(items, secret, key) {
  return {
    info: {
      _postman_id: '22a7a982-c82c-42a4-a946-14f8432dba1b',
      name: 'IberinformApis',
      description:
        'Contact Support:\n Name: Iberinform\n Email: api.support@iberinform.es',
      schema:
        'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: items,
    auth: {
      type: 'apikey',
      apikey: [
        {
          key: 'value',
          value: key,
          type: 'string'
        },
        {
          key: 'key',
          value: 'X-IBM-Client-Id',
          type: 'string'
        },
        {
          key: 'in',
          value: 'header',
          type: 'string'
        }
      ]
    },
    event: [
      {
        listen: 'prerequest',
        script: {
          type: 'text/javascript',
          exec: ['']
        }
      },
      {
        listen: 'test',
        script: {
          type: 'text/javascript',
          exec: ['']
        }
      }
    ],
    variable: [
      {
        key: 'baseUrl',
        value: 'https://apipre.iberinform.es/'
      },
      {
        key: 'X-IBM-Client-Secret',
        value: secret
      }
    ]
  }
}

export const APIS_LIST = [
  { value: 'identificationDetails', label: 'identificationDetails' },
  { value: 'activity', label: 'activity' },
  { value: 'resume', label: 'resume' },
  {
    value: 'consolidatedBalanceSheetAndIncomeStatement',
    label: 'consolidatedBalanceSheetAndIncomeStatement'
  },
  { value: 'consolidatedCashFlows', label: 'consolidatedCashFlows' },
  { value: 'consolidatedEquityChanges', label: 'consolidatedEquityChanges' },
  {
    value: 'consolidatedFinancialAccounts',
    label: 'consolidatedFinancialAccounts'
  },
  {
    value: 'consolidatedFinancialConnections',
    label: 'consolidatedFinancialConnections'
  },
  {
    value: 'consolidatedFinancialRatios',
    label: 'consolidatedFinancialRatios'
  },
  { value: 'notesConsolidatedAccounts', label: 'notesConsolidatedAccounts' },
  { value: 'notesOrdinaryAccounts', label: 'notesOrdinaryAccounts' },
  {
    value: 'ordinaryBalanceSheetAndIncomeStatement',
    label: 'ordinaryBalanceSheetAndIncomeStatement'
  },
  { value: 'ordinaryCashFlows', label: 'ordinaryCashFlows' },
  { value: 'ordinaryEquityChanges', label: 'ordinaryEquityChanges' },
  { value: 'ordinaryFinancialAccounts', label: 'ordinaryFinancialAccounts' },
  {
    value: 'ordinaryFinancialConnections',
    label: 'ordinaryFinancialConnections'
  },
  { value: 'ordinaryFinancialRatios', label: 'ordinaryFinancialRatios' },
  { value: 'sales', label: 'sales' },
  { value: 'additionalFinancialData', label: 'additionalFinancialData' },
  { value: 'activityIncidents', label: 'activityIncidents' },
  { value: 'incidents', label: 'Incidents' },
  { value: 'asnefdata', label: 'Asnefdata' },
  { value: 'delinquencyFiles', label: 'DelinquencyFiles' },
  { value: 'banks', label: 'banks' },
  { value: 'customers', label: 'customers' },
  { value: 'employees', label: 'employees' },
  { value: 'facilities', label: 'facilities' },
  { value: 'providers', label: 'providers' },
  { value: 'riskControlElements', label: 'riskControlElements' },
  { value: 'trademarksEO', label: 'trademarksEO' },
  { value: 'deedsPublishedInBormeEO', label: 'deedsPublishedInBormeEO' },
  { value: 'corporateBodies', label: 'corporateBodies' },
  {
    value: 'officialGazetteOfMercantileRegistryDetail',
    label: 'officialGazetteOfMercantileRegistryDetail'
  },
  { value: 'tradingInformation', label: 'tradingInformation' },
  { value: 'iberPlusReportEO', label: 'iberPlusReportEO' },
  { value: 'investigatedReportEO', label: 'investigatedReportEO' },
  { value: 'rankings', label: 'rankings' },
  { value: 'evaluation', label: 'evaluation' },
  { value: 'organisations', label: 'organisations' },
  { value: 'alerts', label: 'alerts' },
  { value: 'alertTypes', label: 'alertTypes' },
  { value: 'countries', label: 'countries' },
  { value: 'subscriptions', label: 'subscriptions' },
  { value: 'cpvs', label: 'cpvs' },
  { value: 'tenders', label: 'tenders' },
  // { value: 'v2', label: 'v2' },
  { value: 'awardee', label: 'awardee' },
  { value: 'awarder', label: 'awarder' },
  { value: 'identifierType', label: 'identifierType' }
]

export function HTMLTemplate(str) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Swagger UI</title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Code+Pro:300,600|Titillium+Web:400,600,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.2.2/swagger-ui.css"
      />
      <style>
        html {
          box-sizing: border-box;
          overflow: -moz-scrollbars-vertical;
          overflow-y: scroll;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          background: #fafafa;
        }
      </style>
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.2.2/swagger-ui-bundle.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.2.2/swagger-ui-standalone-preset.js"></script>
      <script>
        window.onload = function () {
          var spec = ${str}
          const ui = SwaggerUIBundle({
            spec: spec,
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
            plugins: [SwaggerUIBundle.plugins.DownloadUrl],
            layout: 'StandaloneLayout'
          })
          window.ui = ui
        }
      </script>
    </body>
  </html>`
}
