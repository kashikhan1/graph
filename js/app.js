new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [0,10,20,30,40,50,60,70,80,90],
      datasets: [{
          data: [0,10,20,30,40,50,60,70,80,90],
          label: "Angle over Arc length",
          borderColor: "black",
          fill: false
        },
        {
            data: [10,20,30,40,50,60,70,80,90,100],
            label: "Angle over Arc length 2",
            borderColor: "blue",
            fill: false
          }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'World population per region (in millions)'
      }
    }
  });

  new Chart(document.getElementById("line-chart1"), {
      type: 'line',
      data: {
        labels: [0,10,20,30,40,50,60,70,80,90],
        datasets: [{
            data: [0,10,20,30,40,50,60,70,80,90],
            label: "Angle over Arc length",
            borderColor: "black",
            fill: false
          },
          {
              data: [10,20,30,40,50,60,70,80,90,100],
              label: "Angle over Arc length 2",
              borderColor: "blue",
              fill: false
            }
        ]
      },
      options: {
        title: {
          display: false,
          text: 'World population per region (in millions)'
        }
      }
    });

    new Chart(document.getElementById("line-chart2"), {
        type: 'line',
        data: {
          labels: [0,10,20,30,40,50,60,70,80,90],
          datasets: [{
              data: [0,10,20,30,40,50,60,70,80,90],
              label: "Angle over Arc length",
              borderColor: "black",
              fill: false
            },
            {
                data: [10,20,30,40,50,60,70,80,90,100],
                label: "Angle over Arc length 2",
                borderColor: "blue",
                fill: false
              }
          ]
        },
        options: {
          title: {
            display: false,
            text: 'World population per region (in millions)'
          }
        }
      });

      new Chart(document.getElementById("line-chart3"), {
          type: 'line',
          data: {
            labels: [0,10,20,30,40,50,60,70,80,90],
            datasets: [{
                data: [0,10,20,30,40,50,60,70,80,90],
                label: "Angle over Arc length",
                borderColor: "black",
                fill: false
              },
              {
                  data: [10,20,30,40,50,60,70,80,90,100],
                  label: "Angle over Arc length 2",
                  borderColor: "blue",
                  fill: false
                }
            ]
          },
          options: {
            title: {
              display: false,
              text: 'World population per region (in millions)'
            }
          }
        });

  // new Chart(document.getElementById("circumference-chart"), {
  //   type: 'line',
  //   data: {
  //     labels: [0,10,20,30,40,50,60,70,80,90],
  //     datasets: [{
  //         data: [0,10,20,30,40,50,60,70,80,90],
  //         label: "circumference",
  //         borderColor: "blue",
  //         fill: false
  //       }
  //     ]
  //   },
  //   options: {
  //     title: {
  //       display: false,
  //       text: 'World population per region (in millions)'
  //     }
  //   }
  // });
  //
  // new Chart(document.getElementById("radius-chart"), {
  //   type: 'line',
  //   data: {
  //     labels: [0,10,20,30,40,50,60,70,80,90],
  //     datasets: [{
  //         data: [0,10,20,30,40,50,60,70,80,90],
  //         label: "radius",
  //         borderColor: "red",
  //         fill: false
  //       }
  //     ]
  //   },
  //   options: {
  //     title: {
  //       display: false,
  //       text: 'World population per region (in millions)'
  //     }
  //   }
  // });
