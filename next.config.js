// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: "/_error",
                destination: "/error",
                permanent: false,
            },
        ];
    },
};
