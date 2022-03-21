import React, { useEffect, useState } from "react";
import "./proBar.css";
import "./Data.js";
import qrKm from "./qrCode/KONTAKTORSMP.png";
const Auxcontoktor = () => {
  const [kons, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://localhost:44351/api/Values/722")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="page-header">ADIGE</h2>
      <h4 className="page-header">YARDIMCI KONTAKTOR GRUBU</h4>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[33].componentName === "YKM 3"
                    ? "YKM 3: " + "" + kon.cell[33].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container34">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[33].counterInfo >= 0 &&
                    kon.cell[33].counterInfo <= 500000
                      ? (document.getElementById("five34").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[33].counterInfo >= 500000 &&
                    kon.cell[33].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive34").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[33].counterInfo >= 2500000 &&
                    kon.cell[33].counterInfo <= 5000000
                      ? (document.getElementById("fifty34").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[33].counterInfo >= 5000000 &&
                    kon.cell[33].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive34"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[33].counterInfo >= 7500000 &&
                    kon.cell[33].counterInfo <= 10000000
                      ? (document.getElementById("onehundred34").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress34"
                defaultValue="five"
                id="five34"
              />
              <input
                type="radio"
                className="radio"
                name="progress34"
                defaultValue="twentyfive"
                id="twentyfive34"
              />

              <input
                type="radio"
                className="radio"
                name="progress34"
                defaultValue="fifty"
                id="fifty34"
              />
              <input
                type="radio"
                className="radio"
                name="progress34"
                defaultValue="seventyfive"
                id="seventyfive34"
              />
              <input
                type="radio"
                className="radio"
                name="progress34"
                defaultValue="onehundred"
                id="onehundred34"
              />
              <div className="progress34">
                <div className="progress-bar34" />
              </div>
            </div>
          </div>
        
        
        
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[34].componentName === "YKM 4"
                    ? "YKM 4: " + "" + kon.cell[34].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container35">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[34].counterInfo >= 0 &&
                    kon.cell[34].counterInfo <= 500000
                      ? (document.getElementById("five35").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[34].counterInfo >= 500000 &&
                    kon.cell[34].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive35").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[34].counterInfo >= 2500000 &&
                    kon.cell[34].counterInfo <= 5000000
                      ? (document.getElementById("fifty35").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[34].counterInfo >= 5000000 &&
                    kon.cell[34].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive35"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[34].counterInfo >= 7500000 &&
                    kon.cell[34].counterInfo <= 10000000
                      ? (document.getElementById("onehundred35").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress35"
                defaultValue="five"
                id="five35"
              />
              <input
                type="radio"
                className="radio"
                name="progress35"
                defaultValue="twentyfive"
                id="twentyfive35"
              />

              <input
                type="radio"
                className="radio"
                name="progress35"
                defaultValue="fifty"
                id="fifty35"
              />
              <input
                type="radio"
                className="radio"
                name="progress35"
                defaultValue="seventyfive"
                id="seventyfive35"
              />
              <input
                type="radio"
                className="radio"
                name="progress35"
                defaultValue="onehundred"
                id="onehundred35"
              />
              <div className="progress35">
                <div className="progress-bar35" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[35].componentName === "YKM 5"
                    ? "YKM 5: " + "" + kon.cell[35].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container36">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[35].counterInfo >= 0 &&
                    kon.cell[35].counterInfo <= 500000
                      ? (document.getElementById("five36").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[35].counterInfo >= 500000 &&
                    kon.cell[35].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive36").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[35].counterInfo >= 2500000 &&
                    kon.cell[35].counterInfo <= 5000000
                      ? (document.getElementById("fifty36").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[35].counterInfo >= 5000000 &&
                    kon.cell[35].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive36"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[35].counterInfo >= 7500000 &&
                    kon.cell[35].counterInfo <= 10000000
                      ? (document.getElementById("onehundred36").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress36"
                defaultValue="five"
                id="five36"
              />
              <input
                type="radio"
                className="radio"
                name="progress36"
                defaultValue="twentyfive"
                id="twentyfive36"
              />

              <input
                type="radio"
                className="radio"
                name="progress36"
                defaultValue="fifty"
                id="fifty36"
              />
              <input
                type="radio"
                className="radio"
                name="progress36"
                defaultValue="seventyfive"
                id="seventyfive36"
              />
              <input
                type="radio"
                className="radio"
                name="progress36"
                defaultValue="onehundred"
                id="onehundred36"
              />
              <div className="progress36">
                <div className="progress-bar36" />
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[36].componentName === "YKM 6"
                    ? "YKM 6: " + "" + kon.cell[36].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container36">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[36].counterInfo >= 0 &&
                    kon.cell[36].counterInfo <= 500000
                      ? (document.getElementById("five37").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[36].counterInfo >= 500000 &&
                    kon.cell[36].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive37").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[36].counterInfo >= 2500000 &&
                    kon.cell[36].counterInfo <= 5000000
                      ? (document.getElementById("fifty37").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[36].counterInfo >= 5000000 &&
                    kon.cell[36].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive37"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[36].counterInfo >= 7500000 &&
                    kon.cell[36].counterInfo <= 10000000
                      ? (document.getElementById("onehundred37").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress37"
                defaultValue="five"
                id="five37"
              />
              <input
                type="radio"
                className="radio"
                name="progress37"
                defaultValue="twentyfive"
                id="twentyfive37"
              />

              <input
                type="radio"
                className="radio"
                name="progress37"
                defaultValue="fifty"
                id="fifty37"
              />
              <input
                type="radio"
                className="radio"
                name="progress37"
                defaultValue="seventyfive"
                id="seventyfive37"
              />
              <input
                type="radio"
                className="radio"
                name="progress37"
                defaultValue="onehundred"
                id="onehundred37"
              />
              <div className="progress37">
                <div className="progress-bar37" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[37].componentName === "YKM 7"
                    ? "YKM 7: " + "" + kon.cell[37].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container38">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[37].counterInfo >= 0 &&
                    kon.cell[37].counterInfo <= 500000
                      ? (document.getElementById("five38").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[37].counterInfo >= 500000 &&
                    kon.cell[37].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive38").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[37].counterInfo >= 2500000 &&
                    kon.cell[37].counterInfo <= 5000000
                      ? (document.getElementById("fifty38").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[37].counterInfo >= 5000000 &&
                    kon.cell[37].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive38"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[37].counterInfo >= 7500000 &&
                    kon.cell[37].counterInfo <= 10000000
                      ? (document.getElementById("onehundred38").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress38"
                defaultValue="five"
                id="five38"
              />
              <input
                type="radio"
                className="radio"
                name="progress38"
                defaultValue="twentyfive"
                id="twentyfive38"
              />

              <input
                type="radio"
                className="radio"
                name="progress38"
                defaultValue="fifty"
                id="fifty38"
              />
              <input
                type="radio"
                className="radio"
                name="progress38"
                defaultValue="seventyfive"
                id="seventyfive38"
              />
              <input
                type="radio"
                className="radio"
                name="progress38"
                defaultValue="onehundred"
                id="onehundred38"
              />
              <div className="progress38">
                <div className="progress-bar38" />
              </div>
            </div>
          </div>
        
        
        
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[38].componentName === "YKM 8"
                    ? "YKM 8: " + "" + kon.cell[38].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container38">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[38].counterInfo >= 0 &&
                    kon.cell[38].counterInfo <= 500000
                      ? (document.getElementById("five39").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[38].counterInfo >= 500000 &&
                    kon.cell[38].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive39").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[38].counterInfo >= 2500000 &&
                    kon.cell[38].counterInfo <= 5000000
                      ? (document.getElementById("fifty39").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[38].counterInfo >= 5000000 &&
                    kon.cell[38].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive39"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[38].counterInfo >= 7500000 &&
                    kon.cell[38].counterInfo <= 10000000
                      ? (document.getElementById("onehundred39").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress39"
                defaultValue="five"
                id="five39"
              />
              <input
                type="radio"
                className="radio"
                name="progress39"
                defaultValue="twentyfive"
                id="twentyfive39"
              />

              <input
                type="radio"
                className="radio"
                name="progress39"
                defaultValue="fifty"
                id="fifty39"
              />
              <input
                type="radio"
                className="radio"
                name="progress39"
                defaultValue="seventyfive"
                id="seventyfive39"
              />
              <input
                type="radio"
                className="radio"
                name="progress39"
                defaultValue="onehundred"
                id="onehundred39"
              />
              <div className="progress39">
                <div className="progress-bar39" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[39].componentName === "YKM 9"
                    ? "YKM 9: " + "" + kon.cell[39].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container39">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[39].counterInfo >= 0 &&
                    kon.cell[39].counterInfo <= 500000
                      ? (document.getElementById("five40").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[39].counterInfo >= 500000 &&
                    kon.cell[39].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive40").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[39].counterInfo >= 2500000 &&
                    kon.cell[39].counterInfo <= 5000000
                      ? (document.getElementById("fifty40").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[39].counterInfo >= 5000000 &&
                    kon.cell[39].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive40"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[39].counterInfo >= 7500000 &&
                    kon.cell[39].counterInfo <= 10000000
                      ? (document.getElementById("onehundred40").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress40"
                defaultValue="five"
                id="five40"
              />
              <input
                type="radio"
                className="radio"
                name="progress40"
                defaultValue="twentyfive"
                id="twentyfive40"
              />

              <input
                type="radio"
                className="radio"
                name="progress40"
                defaultValue="fifty"
                id="fifty40"
              />
              <input
                type="radio"
                className="radio"
                name="progress40"
                defaultValue="seventyfive"
                id="seventyfive40"
              />
              <input
                type="radio"
                className="radio"
                name="progress40"
                defaultValue="onehundred"
                id="onehundred40"
              />
              <div className="progress40">
                <div className="progress-bar40" />
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {kons.map((kon) => (
                <h4>
                  {kon.cell[40].componentName === "YKM 10"
                    ? "YKM 10: " + "" + kon.cell[40].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container40">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img src={qrKm} alt="" className="imgMasked" />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[40].counterInfo >= 0 &&
                    kon.cell[40].counterInfo <= 500000
                      ? (document.getElementById("five41").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[40].counterInfo >= 500000 &&
                    kon.cell[40].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive41").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[40].counterInfo >= 2500000 &&
                    kon.cell[40].counterInfo <= 5000000
                      ? (document.getElementById("fifty41").checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[40].counterInfo >= 5000000 &&
                    kon.cell[40].counterInfo <= 7500000
                      ? (document.getElementById(
                          "seventyfive41"
                        ).checked = true)
                      : null}
                  </h4>
                ))}
                {kons.map((kon) => (
                  <h4>
                    {kon.cell[40].counterInfo >= 7500000 &&
                    kon.cell[40].counterInfo <= 10000000
                      ? (document.getElementById("onehundred41").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress41"
                defaultValue="five"
                id="five41"
              />
              <input
                type="radio"
                className="radio"
                name="progress41"
                defaultValue="twentyfive"
                id="twentyfive41"
              />

              <input
                type="radio"
                className="radio"
                name="progress41"
                defaultValue="fifty"
                id="fifty41"
              />
              <input
                type="radio"
                className="radio"
                name="progress41"
                defaultValue="seventyfive"
                id="seventyfive41"
              />
              <input
                type="radio"
                className="radio"
                name="progress41"
                defaultValue="onehundred"
                id="onehundred41"
              />
              <div className="progress41">
                <div className="progress-bar41" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auxcontoktor;
