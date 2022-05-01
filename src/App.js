import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import data from "./data.json";


const App = () => {
  var arr = [];
  var options1 = [];
  var options2 = [];
  var options3 = [];

  const [selected1, setSelected1] = useState(options1);
  const [selected2, setSelected2] = useState(options2);
  const [selected3, setSelected3] = useState(options3);

  data.department.forEach(departments => {
    const option = { label: departments.name, value: departments.name };
    if (!options1.find(o => o.value === departments.name)) {
      options1.push(option);
    }

    departments.groups.forEach(groups => {
      const option = { label: groups.name, value: groups.name };
      if (!options2.find(o => o.value === groups.name)) {
        options2.push(option);
      }

      groups.manager.forEach(managers => {
        const option = { label: managers.name, value: managers.name };
        if (!options3.find(o => o.value === managers.name)) {
          options3.push(option);
        }

        const obj1 = selected1.find(o => o.value === departments.name);
        const obj2 = selected2.find(o => o.value === groups.name);
        const obj3 = selected3.find(o => o.value === managers.name);

        if (obj1 !== undefined && obj2 !== undefined && obj3 !== undefined) {
          arr.push({ department: departments.name, group: groups.name, manager: managers.name });
        }
      });
    });
  });

  return (
    <div className="app">
      <div>
        <a href="https://github.com/Mishka-Sakhelashvili/React__Excel--Filter" target="_blank"> View the code </a>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              <MultiSelect
                options={options1}
                value={selected1}
                onChange={setSelected1}
              />
            </th>
            <th>
              <MultiSelect
                options={options2}
                value={selected2}
                onChange={setSelected2}
              />
            </th>
            <th>
              <MultiSelect
                options={options3}
                value={selected3}
                onChange={setSelected3}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.department}</td>
                <td>{item.group}</td>
                <td>{item.manager}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
