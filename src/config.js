module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'abc',
  DATABASE_URL:
    process.env.DATABASE
    _URL ||
    'postgresql://dunder_mifflin:ronaldo321@localhost/bookmarks'
};
