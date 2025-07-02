import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = await database.query("SELECT version();");
  const maxConnections = parseInt(
    (await database.query("SHOW max_connections;")).rows[0].max_connections,
    10
  );
  const usedConnections = parseInt(
    (await database.query("SELECT count(*) FROM pg_stat_activity;")).rows[0]
      .count,
    10
  );

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresVersion.rows[0].version,
    max_connections: maxConnections,
    used_connections: usedConnections,
  });
}

export default status;
