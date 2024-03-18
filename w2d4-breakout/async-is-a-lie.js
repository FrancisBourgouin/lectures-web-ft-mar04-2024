const { Client } = require("pg");

const main = async () => {
  const client = new Client();
  try {
    await client.connect();

    const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
    console.log(res.rows[0].message); // Hello world!
    await client.end();
  } catch (err) {}
};

main();

// client
//   .connect()
//   .then(() => client.query())
//   .catch()
