module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'jsx'],
    moduleNameMapper: {
        '^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS)$':
            '<rootDir>/test/EmptyModule.js',
    },
    transformIgnorePatterns: ['/node_modules/'],
};
