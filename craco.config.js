const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@authentication': path.resolve(__dirname, 'src/authentication'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assests': path.resolve(__dirname, 'src/assests'),
      '@snippets': path.resolve(__dirname, 'src/snippets'),
      '@communities': path.resolve(__dirname, 'src/components/communities'),
      '@textSection': path.resolve(__dirname, 'src/components/textSection'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
}
