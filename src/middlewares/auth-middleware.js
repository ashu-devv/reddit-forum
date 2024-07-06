const jwt = require('jsonwebtoken');

const authMiddleware = (resolver) => {
  return (parent, args, context, info) => {
    const token = context.headers.authorization || '';
    try {
      const decoded = jwt.verify(token, 'your_secret_key');
      context.user = decoded;
    } catch (err) {
      throw new Error('Not authenticated');
    }
    return resolver(parent, args, context, info);
  };
};

module.exports = authMiddleware;
