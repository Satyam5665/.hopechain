import { useState, useEffect } from "react";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memoMessage = async () => {
      const memos = await contract.getmemos();
      setMemos(memos);
    };
    contract && memoMessage();
  }, [contract]);

  return (
    <div id="cen">
      <br></br>
      <hr></hr>
      <h1>
        Past <span id="donate">Donations</span>
      </h1>
      {memos.map((memo) => {
        return (
          <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#c9dce8",
                      border: "1px solid white",
                      color: "black",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#c9dce8",
                      border: "1px solid white",
                      color:"black",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#c9dce8",
                      color:"black",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#c9dce8",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      color:"black",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
        );
      })}

     
    </div>
  );
};

export default Memos;
