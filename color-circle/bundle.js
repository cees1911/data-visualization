(function (React, ReactDOM, d3) {
  "use strict";

  var React__default = "default" in React ? React["default"] : React;
  ReactDOM =
    ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, "default")
      ? ReactDOM["default"]
      : ReactDOM;

  const csvUrl =
    "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  const pieArc = d3.arc().innerRadius(0).outerRadius(width);

  const App = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      d3.csv(csvUrl).then(setData);
    }, []);

    if (!data) {
      return React__default.createElement("pre", null, "Loading...");
    }

    const colorPie = d3.pie().value(1);

    return React__default.createElement(
      "svg",
      { width: width, height: height },
      React__default.createElement(
        "g",
        { transform: `translate(${centerX},${centerY})` },
        colorPie(data).map((d) =>
          React__default.createElement("path", {
            fill: d.data["RGB hex value"],
            d: pieArc(d),
          })
        )
      )
    );
  };
  const rootElement = document.getElementById("root");
  ReactDOM.render(React__default.createElement(App, null), rootElement);
})(React, ReactDOM, d3);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3N2LCBhcmMsIHBpZSB9IGZyb20gJ2QzJztcblxuY29uc3QgY3N2VXJsID1cbiAgJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vY3VycmFuL2IyMzY5OTAwODFhMjQ3NjFmNzAwMDU2NzA5NDkxNGUwL3Jhdy9jc3NOYW1lZENvbG9ycy5jc3YnO1xuXG5jb25zdCB3aWR0aCA9IDk2MDtcbmNvbnN0IGhlaWdodCA9IDUwMDtcbmNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG5jb25zdCBjZW50ZXJZID0gaGVpZ2h0IC8gMjtcblxuY29uc3QgcGllQXJjID0gYXJjKClcbiAgLmlubmVyUmFkaXVzKDApXG4gIC5vdXRlclJhZGl1cyh3aWR0aCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjc3YoY3N2VXJsKS50aGVuKHNldERhdGEpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxwcmU+TG9hZGluZy4uLjwvcHJlPjtcbiAgfVxuXG4gIGNvbnN0IGNvbG9yUGllID0gcGllKCkudmFsdWUoMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudGVyWH0sJHtjZW50ZXJZfSlgfT5cbiAgICAgICAge2NvbG9yUGllKGRhdGEpLm1hcChkID0+IChcbiAgICAgICAgICA8cGF0aCBmaWxsPXtkLmRhdGFbJ1JHQiBoZXggdmFsdWUnXX0gZD17cGllQXJjKGQpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpOyJdLCJuYW1lcyI6WyJhcmMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNzdiIsIlJlYWN0IiwicGllIl0sIm1hcHBpbmdzIjoiOzs7Ozs7RUFJQSxNQUFNLE1BQU07RUFDWixFQUFFLG1HQUFtRyxDQUFDO0FBQ3RHO0VBQ0EsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztFQUNuQixNQUFNLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDM0I7RUFDQSxNQUFNLE1BQU0sR0FBR0EsTUFBRyxFQUFFO0VBQ3BCLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUNqQixHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QjtFQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU07RUFDbEIsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHQyxjQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekM7RUFDQSxFQUFFQyxlQUFTLENBQUMsTUFBTTtFQUNsQixJQUFJQyxNQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzlCLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNUO0VBQ0EsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO0VBQ2IsSUFBSSxPQUFPQywyQ0FBSyxZQUFVLEVBQU0sQ0FBQztFQUNqQyxHQUFHO0FBQ0g7RUFDQSxFQUFFLE1BQU0sUUFBUSxHQUFHQyxNQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEM7RUFDQSxFQUFFO0VBQ0YsSUFBSUQsdUNBQUssT0FBTyxLQUFNLEVBQUMsUUFBUTtFQUMvQixNQUFNQSxxQ0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDckQsUUFBUyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDN0IsVUFBVUEsd0NBQU0sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxFQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRSxDQUFHO0VBQy9ELFNBQVMsQ0FBRTtFQUNYLE9BQVU7RUFDVixLQUFVO0VBQ1YsSUFBSTtFQUNKLENBQUMsQ0FBQztFQUNGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQ0EsOEJBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDOzs7OyJ9
