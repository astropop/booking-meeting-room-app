import type { NextApiRequest, NextApiResponse } from "next";

// handler
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // method
  const method = "GET";
  // fect options
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      // "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
    },
  };

  // fetch url
  const url =
    "https://raw.githubusercontent.com/astropop/MySearchSim/refs/heads/master/data.json";

  //fetch request
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  } finally {
    console.log("api-finally");
  }
};

export default handler;
