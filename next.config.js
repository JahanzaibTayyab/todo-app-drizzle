/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: "ep-red-sunset-577822.us-east-2.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "zahid-frooq",
    PGPASSWORD: "j6xyKP2XQmUA",
  },
};

module.exports = nextConfig;
