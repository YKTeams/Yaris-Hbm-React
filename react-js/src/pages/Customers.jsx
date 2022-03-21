import React, { useEffect, useState } from "react";
import "./proBar.css";
import "./Data.js";
import qrKm from "./qrCode/KONTAKTORSMP.png"
const Customers = () => {
  const [users, setUsers] = useState([]);

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
      <h4 className="page-header">KONTAKTOR GRUBU</h4>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[0].componentName === "KM 1"
                    ? "KM 1: " + "" + user.cell[0].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container">
              <div className="Project">
                {/* https://brisseaux.tumblr.com/post/91018371936 */}
                <img
                  src={qrKm}
                  alt=""
                  className="imgMasked"
                />
                <div className="Project-hail" />
                <div className="Project-hail2" />
                <p className="Project-name">SMP QR</p>
              </div>
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[0].counterInfo >= 0 &&
                    user.cell[0].counterInfo <= 500000
                      ? (document.getElementById("five").checked = true)
                      : null}
                  </h4>
                ))}
                {users.map((user) => (
                  <h4>
                    {user.cell[0].counterInfo >= 500000 &&
                    user.cell[0].counterInfo <= 2500000
                      ? (document.getElementById("twentyfive").checked = true)
                      : null}
                  </h4>
                ))}
                {users.map((user) => (
                  <h4>
                    {user.cell[0].counterInfo >= 2500000 &&
                    user.cell[0].counterInfo <= 5000000
                      ? (document.getElementById("fifty").checked = true)
                      : null}
                  </h4>
                ))}
                {users.map((user) => (
                  <h4>
                    {user.cell[0].counterInfo >= 5000000 &&
                    user.cell[0].counterInfo <= 7500000
                      ? (document.getElementById("seventyfive").checked = true)
                      : null}
                  </h4>
                ))}
                {users.map((user) => (
                  <h4>
                    {user.cell[0].counterInfo >= 7500000 &&
                    user.cell[0].counterInfo <= 10000000
                      ? (document.getElementById("onehundred").checked = true)
                      : null}
                  </h4>
                ))}
              </h4>

              <input
                type="radio"
                className="radio"
                name="progress"
                defaultValue="five"
                id="five"
              />
              <input
                type="radio"
                className="radio"
                name="progress"
                defaultValue="twentyfive"
                id="twentyfive"
              />

              <input
                type="radio"
                className="radio"
                name="progress"
                defaultValue="fifty"
                id="fifty"
              />
              <input
                type="radio"
                className="radio"
                name="progress"
                defaultValue="seventyfive"
                id="seventyfive"
              />
              <input
                type="radio"
                className="radio"
                name="progress"
                defaultValue="onehundred"
                id="onehundred"
              />
              <div className="progress">
                <div className="progress-bar" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[1].componentName === "KM 2"
                    ? "KM 2: " + "" + user.cell[1].counterInfo
                    : null}
                </h4>
              ))}
            </h4>

            <div className="neoGreen"></div>
            <div className="container1">
              {users.map((user) => (
                <h4>
                  {user.cell[1].counterInfo >= 0 &&
                  user.cell[1].counterInfo <= 500000
                    ? (document.getElementById("five1").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[1].counterInfo >= 500000 &&
                  user.cell[1].counterInfo <= 2500000
                    ? (document.getElementById("twentyfive1").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[1].counterInfo >= 2500000 &&
                  user.cell[1].counterInfo <= 5000000
                    ? (document.getElementById("fifty1").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[1].counterInfo >= 5000000 &&
                  user.cell[1].counterInfo <= 7500000
                    ? (document.getElementById("seventyfive1").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[1].counterInfo >= 7500000 &&
                  user.cell[1].counterInfo <= 10000000
                    ? (document.getElementById("onehundred1").checked = true)
                    : null}
                </h4>
              ))}
              <input
                type="radio"
                className="radio"
                name="progress1"
                defaultValue="five"
                id="five1"
              />

              <input
                type="radio"
                className="radio"
                name="progress1"
                defaultValue="twentyfive"
                id="twentyfive1"
              />

              <input
                type="radio"
                className="radio"
                name="progress1"
                defaultValue="fifty"
                id="fifty1"
              />
              <input
                type="radio"
                className="radio"
                name="progress1"
                defaultValue="seventyfive1"
                id="seventyfive1"
              />
              <input
                type="radio"
                className="radio"
                name="progress1"
                defaultValue="onehundred1"
                id="onehundred1"
              />
              <div className="progress1">
                <div className="progress-bar1" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[2].componentName === "KM 3"
                    ? "KM 3: " + "" + user.cell[2].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container2">
              {users.map((user) => (
                <h4>
                  {user.cell[2].counterInfo >= 0 &&
                  user.cell[2].counterInfo <= 500000
                    ? (document.getElementById("five2").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[2].counterInfo >= 500000 &&
                  user.cell[2].counterInfo <= 2500000
                    ? (document.getElementById("twentyfive2").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[2].counterInfo >= 2500000 &&
                  user.cell[2].counterInfo <= 5000000
                    ? (document.getElementById("fifty2").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[2].counterInfo >= 5000000 &&
                  user.cell[2].counterInfo <= 7500000
                    ? (document.getElementById("seventyfive2").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[2].counterInfo >= 7500000 &&
                  user.cell[2].counterInfo <= 10000000
                    ? (document.getElementById("onehundred2").checked = true)
                    : null}
                </h4>
              ))}
              <input
                type="radio"
                className="radio"
                name="progress2"
                defaultValue="five"
                id="five2"
              />

              <input
                type="radio"
                className="radio"
                name="progress2"
                defaultValue="twentyfive"
                id="twentyfive2"
              />

              <input
                type="radio"
                className="radio"
                name="progress2"
                defaultValue="fifty"
                id="fifty2"
              />
              <input
                type="radio"
                className="radio"
                name="progress2"
                defaultValue="seventyfive"
                id="seventyfive2"
              />
              <input
                type="radio"
                className="radio"
                name="progress2"
                defaultValue="onehundred"
                id="onehundred2"
              />
              <div className="progress2">
                <div className="progress-bar2" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[3].componentName === "KM 4"
                    ? "KM 4: " + "" + user.cell[3].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            {users.map((user) => (
              <h4>
                {user.cell[3].counterInfo >= 0 &&
                user.cell[3].counterInfo <= 500000
                  ? (document.getElementById("five3").checked = true)
                  : null}
              </h4>
            ))}
            {users.map((user) => (
              <h4>
                {user.cell[3].counterInfo >= 500000 &&
                user.cell[3].counterInfo <= 2500000
                  ? (document.getElementById("twentyfive3").checked = true)
                  : null}
              </h4>
            ))}
            {users.map((user) => (
              <h4>
                {user.cell[3].counterInfo >= 2500000 &&
                user.cell[3].counterInfo <= 5000000
                  ? (document.getElementById("fifty3").checked = true)
                  : null}
              </h4>
            ))}
            {users.map((user) => (
              <h4>
                {user.cell[3].counterInfo >= 5000000 &&
                user.cell[3].counterInfo <= 7500000
                  ? (document.getElementById("seventyfive3").checked = true)
                  : null}
              </h4>
            ))}
            {users.map((user) => (
              <h4>
                {user.cell[3].counterInfo >= 7500000 &&
                user.cell[3].counterInfo <= 10000000
                  ? (document.getElementById("onehundred3").checked = true)
                  : null}
              </h4>
            ))}
            <div className="neoGreen"></div>
            <div className="container3">
              <input
                type="radio"
                className="radio"
                name="progress3"
                defaultValue="five"
                id="five3"
              />

              <input
                type="radio"
                className="radio"
                name="progress3"
                defaultValue="twentyfive"
                id="twentyfive3"
              />

              <input
                type="radio"
                className="radio"
                name="progress3"
                defaultValue="fifty"
                id="fifty3"
              />
              <input
                type="radio"
                className="radio"
                name="progress3"
                defaultValue="seventyfive"
                id="seventyfive3"
              />
              <input
                type="radio"
                className="radio"
                name="progress3"
                defaultValue="onehundred"
                id="onehundred3"
              />
              <div className="progress3">
                <div className="progress-bar3" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[4].componentName === "KM 5"
                    ? "KM 5: " + "" + user.cell[4].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container4">
              {users.map((user) => (
                <h4>
                  {user.cell[4].counterInfo >= 0 &&
                  user.cell[4].counterInfo <= 500000
                    ? (document.getElementById("five4").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[4].counterInfo >= 500000 &&
                  user.cell[4].counterInfo <= 2500000
                    ? (document.getElementById("twentyfive4").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[4].counterInfo >= 2500000 &&
                  user.cell[4].counterInfo <= 5000000
                    ? (document.getElementById("fifty4").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[4].counterInfo >= 5000000 &&
                  user.cell[4].counterInfo <= 7500000
                    ? (document.getElementById("seventyfive4").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[4].counterInfo >= 7500000 &&
                  user.cell[4].counterInfo <= 10000000
                    ? (document.getElementById("onehundred4").checked = true)
                    : null}
                </h4>
              ))}
              <input
                type="radio"
                className="radio"
                name="progress4"
                defaultValue="five"
                id="five4"
              />

              <input
                type="radio"
                className="radio"
                name="progress4"
                defaultValue="twentyfive"
                id="twentyfive4"
              />

              <input
                type="radio"
                className="radio"
                name="progress4"
                defaultValue="fifty"
                id="fifty4"
              />
              <input
                type="radio"
                className="radio"
                name="progress4"
                defaultValue="seventyfive"
                id="seventyfive4"
              />
              <input
                type="radio"
                className="radio"
                name="progress4"
                defaultValue="onehundred"
                id="onehundred4"
              />
              <div className="progress4">
                <div className="progress-bar4" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[5].componentName === "KM 6"
                    ? "KM 6: " + "" + user.cell[5].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container5">
              {users.map((user) => (
                <h4>
                  {user.cell[5].counterInfo >= 0 &&
                  user.cell[5].counterInfo <= 500000
                    ? (document.getElementById("five5").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[5].counterInfo >= 500000 &&
                  user.cell[5].counterInfo <= 2500000
                    ? (document.getElementById("twentyfive5").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[5].counterInfo >= 2500000 &&
                  user.cell[5].counterInfo <= 5000000
                    ? (document.getElementById("fifty5").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[5].counterInfo >= 5000000 &&
                  user.cell[5].counterInfo <= 7500000
                    ? (document.getElementById("seventyfive5").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[5].counterInfo >= 7500000 &&
                  user.cell[5].counterInfo <= 10000000
                    ? (document.getElementById("onehundred5").checked = true)
                    : null}
                </h4>
              ))}
              <input
                type="radio"
                className="radio"
                name="progress5"
                defaultValue="five"
                id="five5"
              />

              <input
                type="radio"
                className="radio"
                name="progress5"
                defaultValue="twentyfive"
                id="twentyfive5"
              />

              <input
                type="radio"
                className="radio"
                name="progress5"
                defaultValue="fifty"
                id="fifty5"
              />
              <input
                type="radio"
                className="radio"
                name="progress5"
                defaultValue="seventyfive"
                id="seventyfive5"
              />
              <input
                type="radio"
                className="radio"
                name="progress5"
                defaultValue="onehundred"
                id="onehundred5"
              />
              <div className="progress5">
                <div className="progress-bar5" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[6].componentName === "KM 7"
                    ? "KM 7: " + "" + user.cell[6].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container6">
              {users.map((user) => (
                <h4>
                  {user.cell[6].counterInfo >= 0 &&
                  user.cell[6].counterInfo <= 500000
                    ? (document.getElementById("five6").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[6].counterInfo >= 500000 &&
                  user.cell[6].counterInfo <= 2500000
                    ? (document.getElementById("twentyfive6").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[6].counterInfo >= 2500000 &&
                  user.cell[6].counterInfo <= 5000000
                    ? (document.getElementById("fifty6").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[6].counterInfo >= 5000000 &&
                  user.cell[6].counterInfo <= 7500000
                    ? (document.getElementById("seventyfive6").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[6].counterInfo >= 7500000 &&
                  user.cell[6].counterInfo <= 10000000
                    ? (document.getElementById("onehundred6").checked = true)
                    : null}
                </h4>
              ))}
              <input
                type="radio"
                className="radio"
                name="progress6"
                defaultValue="five"
                id="five6"
              />

              <input
                type="radio"
                className="radio"
                name="progress6"
                defaultValue="twentyfive"
                id="twentyfive6"
              />

              <input
                type="radio"
                className="radio"
                name="progress6"
                defaultValue="fifty"
                id="fifty6"
              />
              <input
                type="radio"
                className="radio"
                name="progress6"
                defaultValue="seventyfive"
                id="seventyfive6"
              />
              <input
                type="radio"
                className="radio"
                name="progress6"
                defaultValue="onehundred"
                id="onehundred6"
              />
              <div className="progress6">
                <div className="progress-bar6" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <h4>
              {users.map((user) => (
                <h4>
                  {user.cell[7].componentName === "KM 8"
                    ? "KM 8: " + "" + user.cell[7].counterInfo
                    : null}
                </h4>
              ))}
            </h4>
            <div className="neoGreen"></div>
            <div className="container7">
              {users.map((user) => (
                <h4>
                  {user.cell[7].counterInfo >= 0 &&
                  user.cell[7].counterInfo <= 500000
                    ? (document.getElementById("five7").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[7].counterInfo >= 500000 &&
                  user.cell[7].counterInfo <= 2500000
                    ? (document.getElementById("twentyfive7").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[7].counterInfo >= 2500000 &&
                  user.cell[7].counterInfo <= 5000000
                    ? (document.getElementById("fifty7").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[7].counterInfo >= 5000000 &&
                  user.cell[7].counterInfo <= 7500000
                    ? (document.getElementById("seventyfive7").checked = true)
                    : null}
                </h4>
              ))}
              {users.map((user) => (
                <h4>
                  {user.cell[7].counterInfo >= 7500000 &&
                  user.cell[7].counterInfo <= 10000000
                    ? (document.getElementById("onehundred7").checked = true)
                    : null}
                </h4>
              ))}
              <input
                type="radio"
                className="radio"
                name="progress7"
                defaultValue="five"
                id="five7"
              />

              <input
                type="radio"
                className="radio"
                name="progress7"
                defaultValue="twentyfive"
                id="twentyfive7"
              />

              <input
                type="radio"
                className="radio"
                name="progress7"
                defaultValue="fifty"
                id="fifty7"
              />
              <input
                type="radio"
                className="radio"
                name="progress7"
                defaultValue="seventyfive"
                id="seventyfive7"
              />
              <input
                type="radio"
                className="radio"
                name="progress7"
                defaultValue="onehundred"
                id="onehundred7"
              />
              <div className="progress7">
                <div className="progress-bar7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div className="row">
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[8].componentName === "KM 9"
                      ? "KM 9: " + "" + user.cell[8].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container8">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[8].counterInfo >= 0 &&
                      user.cell[8].counterInfo <= 500000
                        ? (document.getElementById("five8").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[8].counterInfo >= 500000 &&
                      user.cell[8].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive8"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[8].counterInfo >= 2500000 &&
                      user.cell[8].counterInfo <= 5000000
                        ? (document.getElementById("fifty8").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[8].counterInfo >= 5000000 &&
                      user.cell[8].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive8"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[8].counterInfo >= 7500000 &&
                      user.cell[8].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred8"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress8"
                  defaultValue="five"
                  id="five8"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress8"
                  defaultValue="twentyfive"
                  id="twentyfive8"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress8"
                  defaultValue="fifty"
                  id="fifty8"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress8"
                  defaultValue="seventyfive"
                  id="seventyfive8"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress8"
                  defaultValue="onehundred"
                  id="onehundred8"
                />
                <div className="progress8">
                  <div className="progress-bar8" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[9].componentName === "KM 10"
                      ? "KM 10: " + "" + user.cell[9].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container9">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[9].counterInfo >= 0 &&
                      user.cell[9].counterInfo <= 500000
                        ? (document.getElementById("five9").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[9].counterInfo >= 500000 &&
                      user.cell[9].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive9"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[9].counterInfo >= 2500000 &&
                      user.cell[9].counterInfo <= 5000000
                        ? (document.getElementById("fifty9").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[9].counterInfo >= 5000000 &&
                      user.cell[9].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive9"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[9].counterInfo >= 7500000 &&
                      user.cell[9].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred9"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>

                <input
                  type="radio"
                  className="radio"
                  name="progress9"
                  defaultValue="five"
                  id="five9"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress9"
                  defaultValue="twentyfive"
                  id="twentyfive9"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress9"
                  defaultValue="fifty"
                  id="fifty9"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress9"
                  defaultValue="seventyfive"
                  id="seventyfive9"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress9"
                  defaultValue="onehundred"
                  id="onehundred9"
                />
                <div className="progress9">
                  <div className="progress-bar9" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[10].componentName === "KM 11"
                      ? "KM 11: " + "" + user.cell[10].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container10">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[10].counterInfo >= 0 &&
                      user.cell[10].counterInfo <= 500000
                        ? (document.getElementById("five10").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[10].counterInfo >= 500000 &&
                      user.cell[10].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive10"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[10].counterInfo >= 2500000 &&
                      user.cell[10].counterInfo <= 5000000
                        ? (document.getElementById("fifty10").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[10].counterInfo >= 5000000 &&
                      user.cell[10].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive10"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[10].counterInfo >= 7500000 &&
                      user.cell[10].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred10"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>

                <input
                  type="radio"
                  className="radio"
                  name="progress10"
                  defaultValue="five"
                  id="five10"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress10"
                  defaultValue="twentyfive"
                  id="twentyfive10"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress10"
                  defaultValue="fifty"
                  id="fifty10"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress10"
                  defaultValue="seventyfive"
                  id="seventyfive10"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress10"
                  defaultValue="onehundred"
                  id="onehundred10"
                />
                <div className="progress10">
                  <div className="progress-bar10" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[11].componentName === "KM 12"
                      ? "KM 12: " + "" + user.cell[11].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container11">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[11].counterInfo >= 0 &&
                      user.cell[11].counterInfo <= 500000
                        ? (document.getElementById("five11").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[11].counterInfo >= 500000 &&
                      user.cell[11].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive11"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[11].counterInfo >= 2500000 &&
                      user.cell[11].counterInfo <= 5000000
                        ? (document.getElementById("fifty11").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[11].counterInfo >= 5000000 &&
                      user.cell[11].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive11"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[11].counterInfo >= 7500000 &&
                      user.cell[11].counterInfo <= 11000000
                        ? (document.getElementById(
                            "onehundred11"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress11"
                  defaultValue="five"
                  id="five11"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress11"
                  defaultValue="twentyfive"
                  id="twentyfive11"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress11"
                  defaultValue="fifty"
                  id="fifty11"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress11"
                  defaultValue="seventyfive"
                  id="seventyfive11"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress11"
                  defaultValue="onehundred"
                  id="onehundred11"
                />
                <div className="progress11">
                  <div className="progress-bar11" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[12].componentName === "KM 13"
                      ? "KM 13: " + "" + user.cell[12].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container12">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[12].counterInfo >= 0 &&
                      user.cell[12].counterInfo <= 500000
                        ? (document.getElementById("five12").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[12].counterInfo >= 500000 &&
                      user.cell[12].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive12"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[12].counterInfo >= 2500000 &&
                      user.cell[12].counterInfo <= 5000000
                        ? (document.getElementById("fifty12").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[12].counterInfo >= 5000000 &&
                      user.cell[12].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive12"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[12].counterInfo >= 7500000 &&
                      user.cell[12].counterInfo <= 12000000
                        ? (document.getElementById(
                            "onehundred12"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress12"
                  defaultValue="five"
                  id="five12"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress12"
                  defaultValue="twentyfive"
                  id="twentyfive12"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress12"
                  defaultValue="fifty"
                  id="fifty12"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress12"
                  defaultValue="seventyfive"
                  id="seventyfive12"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress12"
                  defaultValue="onehundred"
                  id="onehundred12"
                />
                <div className="progress12">
                  <div className="progress-bar12" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[13].componentName === "KM 14"
                      ? "KM 14: " + "" + user.cell[13].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container13">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[13].counterInfo >= 0 &&
                      user.cell[13].counterInfo <= 500000
                        ? (document.getElementById("five13").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[13].counterInfo >= 500000 &&
                      user.cell[13].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive13"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[13].counterInfo >= 2500000 &&
                      user.cell[13].counterInfo <= 5000000
                        ? (document.getElementById("fifty13").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[13].counterInfo >= 5000000 &&
                      user.cell[13].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive13"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[13].counterInfo >= 7500000 &&
                      user.cell[13].counterInfo <= 13000000
                        ? (document.getElementById(
                            "onehundred13"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress13"
                  defaultValue="five"
                  id="five13"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress13"
                  defaultValue="twentyfive"
                  id="twentyfive13"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress13"
                  defaultValue="fifty"
                  id="fifty13"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress13"
                  defaultValue="seventyfive"
                  id="seventyfive13"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress13"
                  defaultValue="onehundred"
                  id="onehundred13"
                />
                <div className="progress13">
                  <div className="progress-bar13" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[14].componentName === "KM 15"
                      ? "KM 15: " + "" + user.cell[14].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container14">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[14].counterInfo >= 0 &&
                      user.cell[14].counterInfo <= 500000
                        ? (document.getElementById("five14").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[14].counterInfo >= 500000 &&
                      user.cell[14].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive14"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[14].counterInfo >= 2500000 &&
                      user.cell[14].counterInfo <= 5000000
                        ? (document.getElementById("fifty14").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[14].counterInfo >= 5000000 &&
                      user.cell[14].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive14"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[14].counterInfo >= 7500000 &&
                      user.cell[14].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred14"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress14"
                  defaultValue="five"
                  id="five14"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress14"
                  defaultValue="twentyfive"
                  id="twentyfive14"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress14"
                  defaultValue="fifty"
                  id="fifty14"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress14"
                  defaultValue="seventyfive"
                  id="seventyfive14"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress14"
                  defaultValue="onehundred"
                  id="onehundred14"
                />
                <div className="progress14">
                  <div className="progress-bar14" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[15].componentName === "KM 16"
                      ? "KM 16: " + "" + user.cell[15].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container15">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[15].counterInfo >= 0 &&
                      user.cell[15].counterInfo <= 500000
                        ? (document.getElementById("five15").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[15].counterInfo >= 500000 &&
                      user.cell[15].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive15"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[15].counterInfo >= 2500000 &&
                      user.cell[15].counterInfo <= 5000000
                        ? (document.getElementById("fifty15").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[15].counterInfo >= 5000000 &&
                      user.cell[15].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive15"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[15].counterInfo >= 7500000 &&
                      user.cell[15].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred15"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress15"
                  defaultValue="five"
                  id="five15"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress15"
                  defaultValue="twentyfive"
                  id="twentyfive15"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress15"
                  defaultValue="fifty"
                  id="fifty15"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress15"
                  defaultValue="seventyfive"
                  id="seventyfive15"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress15"
                  defaultValue="onehundred"
                  id="onehundred15"
                />
                <div className="progress15">
                  <div className="progress-bar15" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[16].componentName === "KM 17"
                      ? "KM 17: " + "" + user.cell[16].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container16">
                <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[16].counterInfo >= 0 &&
                      user.cell[16].counterInfo <= 500000
                        ? (document.getElementById("five16").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[16].counterInfo >= 500000 &&
                      user.cell[16].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive16"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[16].counterInfo >= 2500000 &&
                      user.cell[16].counterInfo <= 5000000
                        ? (document.getElementById("fifty16").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[16].counterInfo >= 5000000 &&
                      user.cell[16].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive16"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[16].counterInfo >= 7500000 &&
                      user.cell[16].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred16"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress16"
                  defaultValue="five"
                  id="five16"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress16"
                  defaultValue="twentyfive"
                  id="twentyfive16"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress16"
                  defaultValue="fifty"
                  id="fifty16"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress16"
                  defaultValue="seventyfive"
                  id="seventyfive16"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress16"
                  defaultValue="onehundred"
                  id="onehundred16"
                />
                <div className="progress16">
                  <div className="progress-bar16" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[17].componentName === "KM 18"
                      ? "KM 18: " + "" + user.cell[17].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container17">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[17].counterInfo >= 0 &&
                      user.cell[17].counterInfo <= 500000
                        ? (document.getElementById("five17").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[17].counterInfo >= 500000 &&
                      user.cell[17].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive17"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[17].counterInfo >= 2500000 &&
                      user.cell[17].counterInfo <= 5000000
                        ? (document.getElementById("fifty17").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[17].counterInfo >= 5000000 &&
                      user.cell[17].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive17"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[17].counterInfo >= 7500000 &&
                      user.cell[17].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred17"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress17"
                  defaultValue="five"
                  id="five17"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress17"
                  defaultValue="twentyfive"
                  id="twentyfive17"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress17"
                  defaultValue="fifty"
                  id="fifty17"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress17"
                  defaultValue="seventyfive"
                  id="seventyfive17"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress17"
                  defaultValue="onehundred"
                  id="onehundred17"
                />

                <div className="progress17">
                  <div className="progress-bar17" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[18].componentName === "KM 19"
                      ? "KM 19: " + "" + user.cell[18].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container18">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[18].counterInfo >= 0 &&
                      user.cell[18].counterInfo <= 500000
                        ? (document.getElementById("five18").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[18].counterInfo >= 500000 &&
                      user.cell[18].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive18"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[18].counterInfo >= 2500000 &&
                      user.cell[18].counterInfo <= 5000000
                        ? (document.getElementById("fifty18").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[18].counterInfo >= 5000000 &&
                      user.cell[18].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive18"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[18].counterInfo >= 7500000 &&
                      user.cell[18].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred18"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress18"
                  defaultValue="five"
                  id="five18"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress18"
                  defaultValue="twentyfive"
                  id="twentyfive18"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress18"
                  defaultValue="fifty"
                  id="fifty18"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress18"
                  defaultValue="seventyfive"
                  id="seventyfive18"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress18"
                  defaultValue="onehundred"
                  id="onehundred18"
                />
                <div className="progress18">
                  <div className="progress-bar18" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[19].componentName === "KM 20"
                      ? "KM 20: " + "" + user.cell[19].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container19">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[19].counterInfo >= 0 &&
                      user.cell[19].counterInfo <= 500000
                        ? (document.getElementById("five19").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[19].counterInfo >= 500000 &&
                      user.cell[19].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive19"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[19].counterInfo >= 2500000 &&
                      user.cell[19].counterInfo <= 5000000
                        ? (document.getElementById("fifty19").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[19].counterInfo >= 5000000 &&
                      user.cell[19].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive19"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[19].counterInfo >= 7500000 &&
                      user.cell[19].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred19"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress19"
                  defaultValue="five"
                  id="five19"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress19"
                  defaultValue="twentyfive"
                  id="twentyfive19"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress19"
                  defaultValue="fifty"
                  id="fifty19"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress19"
                  defaultValue="seventyfive"
                  id="seventyfive19"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress19"
                  defaultValue="onehundred"
                  id="onehundred19"
                />
                <div className="progress19">
                  <div className="progress-bar19" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[20].componentName === "KM 21"
                      ? "KM 21: " + "" + user.cell[20].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container20">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[20].counterInfo >= 0 &&
                      user.cell[20].counterInfo <= 500000
                        ? (document.getElementById("five20").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[20].counterInfo >= 500000 &&
                      user.cell[20].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive20"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[20].counterInfo >= 2500000 &&
                      user.cell[20].counterInfo <= 5000000
                        ? (document.getElementById("fifty20").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[20].counterInfo >= 5000000 &&
                      user.cell[20].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive20"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[20].counterInfo >= 7500000 &&
                      user.cell[20].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred20"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress20"
                  defaultValue="five"
                  id="five20"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress20"
                  defaultValue="twentyfive"
                  id="twentyfive20"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress20"
                  defaultValue="fifty"
                  id="fifty20"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress20"
                  defaultValue="seventyfive"
                  id="seventyfive20"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress20"
                  defaultValue="onehundred"
                  id="onehundred20"
                />
                <div className="progress20">
                  <div className="progress-bar20" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[21].componentName === "KM 22"
                      ? "KM 22: " + "" + user.cell[21].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container21">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[21].counterInfo >= 0 &&
                      user.cell[21].counterInfo <= 500000
                        ? (document.getElementById("five21").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[21].counterInfo >= 500000 &&
                      user.cell[21].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive21"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[21].counterInfo >= 2500000 &&
                      user.cell[21].counterInfo <= 5000000
                        ? (document.getElementById("fifty21").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[21].counterInfo >= 5000000 &&
                      user.cell[21].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive21"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[21].counterInfo >= 7500000 &&
                      user.cell[21].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred21"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress21"
                  defaultValue="five"
                  id="five21"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress21"
                  defaultValue="twentyfive"
                  id="twentyfive21"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress21"
                  defaultValue="fifty"
                  id="fifty21"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress21"
                  defaultValue="seventyfive"
                  id="seventyfive21"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress21"
                  defaultValue="onehundred"
                  id="onehundred21"
                />
                <div className="progress21">
                  <div className="progress-bar21" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[22].componentName === "KM 23"
                      ? "KM 23: " + "" + user.cell[22].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container22">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[22].counterInfo >= 0 &&
                      user.cell[22].counterInfo <= 500000
                        ? (document.getElementById("five22").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[22].counterInfo >= 500000 &&
                      user.cell[22].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive22"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[22].counterInfo >= 2500000 &&
                      user.cell[22].counterInfo <= 5000000
                        ? (document.getElementById("fifty22").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[22].counterInfo >= 5000000 &&
                      user.cell[22].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive22"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[22].counterInfo >= 7500000 &&
                      user.cell[22].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred22"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress22"
                  defaultValue="five"
                  id="five22"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress22"
                  defaultValue="twentyfive"
                  id="twentyfive22"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress22"
                  defaultValue="fifty"
                  id="fifty22"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress22"
                  defaultValue="seventyfive"
                  id="seventyfive22"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress22"
                  defaultValue="onehundred"
                  id="onehundred22"
                />
                <div className="progress22">
                  <div className="progress-bar22" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[23].componentName === "KM 24"
                      ? "KM 24: " + "" + user.cell[23].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container23">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[23].counterInfo >= 0 &&
                      user.cell[23].counterInfo <= 500000
                        ? (document.getElementById("five23").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[23].counterInfo >= 500000 &&
                      user.cell[23].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive23"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[23].counterInfo >= 2500000 &&
                      user.cell[23].counterInfo <= 5000000
                        ? (document.getElementById("fifty23").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[23].counterInfo >= 5000000 &&
                      user.cell[23].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive23"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[23].counterInfo >= 7500000 &&
                      user.cell[23].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred23"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress23"
                  defaultValue="five"
                  id="five23"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress23"
                  defaultValue="twentyfive"
                  id="twentyfive23"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress23"
                  defaultValue="fifty"
                  id="fifty23"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress23"
                  defaultValue="seventyfive"
                  id="seventyfive23"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress23"
                  defaultValue="onehundred"
                  id="onehundred23"
                />
                <div className="progress23">
                  <div className="progress-bar23" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[24].componentName === "KM 25"
                      ? "KM 25: " + "" + user.cell[24].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container24">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[24].counterInfo >= 0 &&
                      user.cell[24].counterInfo <= 500000
                        ? (document.getElementById("five24").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[24].counterInfo >= 500000 &&
                      user.cell[24].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive24"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[24].counterInfo >= 2500000 &&
                      user.cell[24].counterInfo <= 5000000
                        ? (document.getElementById("fifty24").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[24].counterInfo >= 5000000 &&
                      user.cell[24].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive24"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[24].counterInfo >= 7500000 &&
                      user.cell[24].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred24"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress24"
                  defaultValue="five"
                  id="five24"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress24"
                  defaultValue="twentyfive"
                  id="twentyfive24"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress24"
                  defaultValue="fifty"
                  id="fifty24"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress24"
                  defaultValue="seventyfive"
                  id="seventyfive24"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress24"
                  defaultValue="onehundred"
                  id="onehundred24"
                />
                <div className="progress24">
                  <div className="progress-bar24" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[25].componentName === "KM 26"
                      ? "KM 26: " + "" + user.cell[25].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container25">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[25].counterInfo >= 0 &&
                      user.cell[25].counterInfo <= 500000
                        ? (document.getElementById("five25").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[25].counterInfo >= 500000 &&
                      user.cell[25].counterInfo <= 2500000
                        ? (document.getElementById(
                            "twentyfive25"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[25].counterInfo >= 2500000 &&
                      user.cell[25].counterInfo <= 5000000
                        ? (document.getElementById("fifty25").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[25].counterInfo >= 5000000 &&
                      user.cell[25].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive25"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[25].counterInfo >= 7500000 &&
                      user.cell[25].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred25"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress25"
                  defaultValue="five"
                  id="five25"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress25"
                  defaultValue="twentyfive"
                  id="twentyfive25"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress25"
                  defaultValue="fifty"
                  id="fifty25"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress25"
                  defaultValue="seventyfive"
                  id="seventyfive25"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress25"
                  defaultValue="onehundred"
                  id="onehundred25"
                />
                <div className="progress25">
                  <div className="progress-bar25" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[26].componentName === "KM 27"
                      ? "KM 27: " + "" + user.cell[26].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container26">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[26].counterInfo >= 0 &&
                      user.cell[26].counterInfo <= 500000
                        ? (document.getElementById("five26").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[26].counterInfo >= 500000 &&
                      user.cell[26].counterInfo <= 2600000
                        ? (document.getElementById(
                            "twentyfive26"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[26].counterInfo >= 2600000 &&
                      user.cell[26].counterInfo <= 5000000
                        ? (document.getElementById("fifty26").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[26].counterInfo >= 5000000 &&
                      user.cell[26].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive26"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[26].counterInfo >= 7500000 &&
                      user.cell[26].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred26"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress26"
                  defaultValue="five"
                  id="five26"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress26"
                  defaultValue="twentyfive"
                  id="twentyfive26"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress26"
                  defaultValue="fifty"
                  id="fifty26"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress26"
                  defaultValue="seventyfive"
                  id="seventyfive26"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress26"
                  defaultValue="onehundred"
                  id="onehundred26"
                />
                <div className="progress26">
                  <div className="progress-bar26" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[27].componentName === "KM 28"
                      ? "KM 28: " + "" + user.cell[27].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container27">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[27].counterInfo >= 0 &&
                      user.cell[27].counterInfo <= 500000
                        ? (document.getElementById("five27").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[27].counterInfo >= 500000 &&
                      user.cell[27].counterInfo <= 2700000
                        ? (document.getElementById(
                            "twentyfive27"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[27].counterInfo >= 2700000 &&
                      user.cell[27].counterInfo <= 5000000
                        ? (document.getElementById("fifty27").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[27].counterInfo >= 5000000 &&
                      user.cell[27].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive27"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[27].counterInfo >= 7500000 &&
                      user.cell[27].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred27"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress27"
                  defaultValue="five"
                  id="five27"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress27"
                  defaultValue="twentyfive"
                  id="twentyfive27"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress27"
                  defaultValue="fifty"
                  id="fifty27"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress27"
                  defaultValue="seventyfive"
                  id="seventyfive27"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress27"
                  defaultValue="onehundred"
                  id="onehundred27"
                />
                <div className="progress27">
                  <div className="progress-bar27" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[28].componentName === "KM 29"
                      ? "KM 29: " + "" + user.cell[28].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container28">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[28].counterInfo >= 0 &&
                      user.cell[28].counterInfo <= 500000
                        ? (document.getElementById("five28").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[28].counterInfo >= 500000 &&
                      user.cell[28].counterInfo <= 2800000
                        ? (document.getElementById(
                            "twentyfive28"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[28].counterInfo >= 2800000 &&
                      user.cell[28].counterInfo <= 5000000
                        ? (document.getElementById("fifty28").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[28].counterInfo >= 5000000 &&
                      user.cell[28].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive28"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[28].counterInfo >= 7500000 &&
                      user.cell[28].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred28"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress28"
                  defaultValue="five"
                  id="five28"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress28"
                  defaultValue="twentyfive"
                  id="twentyfive28"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress28"
                  defaultValue="fifty"
                  id="fifty28"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress28"
                  defaultValue="seventyfive"
                  id="seventyfive28"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress28"
                  defaultValue="onehundred"
                  id="onehundred28"
                />
                <div className="progress28">
                  <div className="progress-bar28" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[29].componentName === "KM 30"
                      ? "KM 30: " + "" + user.cell[29].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container29">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[29].counterInfo >= 0 &&
                      user.cell[29].counterInfo <= 500000
                        ? (document.getElementById("five29").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[29].counterInfo >= 500000 &&
                      user.cell[29].counterInfo <= 2900000
                        ? (document.getElementById(
                            "twentyfive29"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[29].counterInfo >= 2900000 &&
                      user.cell[29].counterInfo <= 5000000
                        ? (document.getElementById("fifty29").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[29].counterInfo >= 5000000 &&
                      user.cell[29].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive29"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[29].counterInfo >= 7500000 &&
                      user.cell[29].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred29"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress29"
                  defaultValue="five"
                  id="five29"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress29"
                  defaultValue="twentyfive"
                  id="twentyfive29"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress29"
                  defaultValue="fifty"
                  id="fifty29"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress29"
                  defaultValue="seventyfive"
                  id="seventyfive29"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress29"
                  defaultValue="onehundred"
                  id="onehundred29"
                />
                <div className="progress29">
                  <div className="progress-bar29" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[30].componentName === "KM 31"
                      ? "KM 31: " + "" + user.cell[30].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container30">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[30].counterInfo >= 0 &&
                      user.cell[30].counterInfo <= 500000
                        ? (document.getElementById("five30").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[30].counterInfo >= 500000 &&
                      user.cell[30].counterInfo <= 3000000
                        ? (document.getElementById(
                            "twentyfive30"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[30].counterInfo >= 3000000 &&
                      user.cell[30].counterInfo <= 5000000
                        ? (document.getElementById("fifty30").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[30].counterInfo >= 5000000 &&
                      user.cell[30].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive30"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[30].counterInfo >= 7500000 &&
                      user.cell[30].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred30"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress30"
                  defaultValue="five"
                  id="five30"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress30"
                  defaultValue="twentyfive"
                  id="twentyfive30"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress30"
                  defaultValue="fifty"
                  id="fifty30"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress30"
                  defaultValue="seventyfive"
                  id="seventyfive30"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress30"
                  defaultValue="onehundred"
                  id="onehundred30"
                />
                <div className="progress30">
                  <div className="progress-bar30" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[31].componentName === "KM 32"
                      ? "KM 32: " + "" + user.cell[31].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container31">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[31].counterInfo >= 0 &&
                      user.cell[31].counterInfo <= 500000
                        ? (document.getElementById("five31").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[31].counterInfo >= 500000 &&
                      user.cell[31].counterInfo <= 3100000
                        ? (document.getElementById(
                            "twentyfive31"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[31].counterInfo >= 3100000 &&
                      user.cell[31].counterInfo <= 5000000
                        ? (document.getElementById("fifty31").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[31].counterInfo >= 5000000 &&
                      user.cell[31].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive31"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[31].counterInfo >= 7500000 &&
                      user.cell[31].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred31"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress31"
                  defaultValue="five"
                  id="five31"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress31"
                  defaultValue="twentyfive"
                  id="twentyfive31"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress31"
                  defaultValue="fifty"
                  id="fifty31"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress31"
                  defaultValue="seventyfive"
                  id="seventyfive31"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress31"
                  defaultValue="onehundred"
                  id="onehundred31"
                />
                <div className="progress31">
                  <div className="progress-bar31" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <h4>
                {users.map((user) => (
                  <h4>
                    {user.cell[32].componentName === "KM 33"
                      ? "KM 33: " + "" + user.cell[32].counterInfo
                      : null}
                  </h4>
                ))}
              </h4>
              <div className="neoGreen"></div>
              <div className="container32">
              <h4>
                  {users.map((user) => (
                    <h4>
                      {user.cell[32].counterInfo >= 0 &&
                      user.cell[32].counterInfo <= 500000
                        ? (document.getElementById("five32").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[32].counterInfo >= 500000 &&
                      user.cell[32].counterInfo <= 3200000
                        ? (document.getElementById(
                            "twentyfive32"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[32].counterInfo >= 3200000 &&
                      user.cell[32].counterInfo <= 5000000
                        ? (document.getElementById("fifty32").checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[32].counterInfo >= 5000000 &&
                      user.cell[32].counterInfo <= 7500000
                        ? (document.getElementById(
                            "seventyfive32"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                  {users.map((user) => (
                    <h4>
                      {user.cell[32].counterInfo >= 7500000 &&
                      user.cell[32].counterInfo <= 10000000
                        ? (document.getElementById(
                            "onehundred32"
                          ).checked = true)
                        : null}
                    </h4>
                  ))}
                </h4>
                <input
                  type="radio"
                  className="radio"
                  name="progress32"
                  defaultValue="five"
                  id="five32"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress32"
                  defaultValue="twentyfive"
                  id="twentyfive32"
                />

                <input
                  type="radio"
                  className="radio"
                  name="progress32"
                  defaultValue="fifty"
                  id="fifty32"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress32"
                  defaultValue="seventyfive"
                  id="seventyfive32"
                />
                <input
                  type="radio"
                  className="radio"
                  name="progress32"
                  defaultValue="onehundred"
                  id="onehundred32"
                />
                <div className="progress32">
                  <div className="progress-bar32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};
export default Customers;
