module.exports = {
  "type": "mysql",
  "host": process.env.TYPEORM_HOST || "localhost",
  "port": process.env.TYPEORM_PORT || 3306,
  "username": process.env.TYPEORM_USERNAME || "root",
  "password": process.env.TYPEORM_PASSWORD || "test",
  "database": process.env.TYPEORM_DATABASE || "mp3-player-server",
  "synchronize": true,
  "logging": false,
  "entities": [
    "src/entity/**/*.ts"
  ],
  "migrations": [
    "src/migration/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}
