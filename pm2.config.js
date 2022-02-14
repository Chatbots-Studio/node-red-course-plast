module.exports = {
  apps: [
    {
      name: "node-red-bot",
      script: "C:/Users/Admin/AppData/Roaming/npm/node_modules/node-red/red.js",
      args: "-s settings.js -u ./",
      watch: false,
      node_args: "--max_old_space_size=1500",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      env: {
        NODE_ENV: "LOCAL",

        CUSTOMER_API_URL: 'http://core-apps.dev.chatbots.vpc:8080/core-customer-api',
        CUSTOMER_API_KEY: '?aM-dUZVF@ZWJvq5Y2?Bfrs5j=A9?+sb',

        MESSAGES_API_URL: 'http://core-apps.dev.chatbots.vpc:8080/core-messages-api',
        MESSAGES_API_KEY: 'h5@8WzM%KFhxMf!r!P_m6WM=VJvgef?q',
        
        
        
        
        BOT_ID: '1',
        CHANNEL: 'TG',
        COMPANY_ID: '43',
        PORT:1880,

        TOKEN: '5127399932:AAHYZxsj75qtYrhhAR4GjM_nKsKE0qbtPws',
        TELEGRAM_URL:  'https://api.telegram.org',
        GROUP_ID:'-782397011',

        MONGO_DB:'BotOrendaLviv',
        MONGO_HOST:'cluster0.qac9y.mongodb.net',
        MONGO_USER:'admin',
        MONGO_PASSWORD:'admin123456'

      }/*,
      env_dev: {
      }*/
    },
  ],
};
