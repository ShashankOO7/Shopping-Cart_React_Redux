import { useParams } from "react-router-dom";
import Records from "../record.json";

function CardDetails() {
  const { id } = useParams();
  //console.log(id)
  //console.log(Records[1]);
  return (
    <div>
      <>
        <div>
          <h1 style={{ textAlign: "center" }}>PRODUCT DETAILS</h1>
          <section>
            <div
              className="iteamsdetails"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <div className="items_img">
                  <img
                    src={Records[id - 1].img}
                    alt=""
                    style={{ height: 500 }}
                  />
                </div>
              </div>
              <div className="details">
                <h1>
                  {Records[id - 1].brand} {Records[id - 1].name}
                </h1>

                <table  width='100%' style={{backgroundColor:'white', borderRadius:'10px', textAlign:'center'}} cellPadding='10px'>
                  <tbody cellPadding='2px'>
                    <tr>
                      <td>
                        <strong>Color</strong>
                      </td>
                      <td>{Records[id - 1].Color}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>RAM</strong>
                      </td>
                      <td>{Records[id - 1].RAM}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Storage</strong>
                      </td>
                      <td>{Records[id - 1].ROM}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>OS</strong>
                      </td>
                      <td>{Records[id - 1].OS}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Price</strong>
                      </td>
                      <td>${Records[id - 1].price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}

export default CardDetails;
