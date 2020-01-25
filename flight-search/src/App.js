
import React, { Component } from 'react'
import Conditions from "./component/Conditions"


const API_key = "ddcc84a614bea16468503c8573cc0b70";

class App extends Component {
  state = {
    From: "",
    To: "",
    Date: "",
    Flightname: "",
    Depature: "",
    Duration: "",
    Arrival: "",
    Price: "",
  }
  // getFlight = async (e) => {
  //   e.preventDefault()
  //   // const From = e.target.elements.From.value
  //   // const To = e.target.elements.To.value
  //   const api_call = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_key}`)
  //   const response = await api_call.json()
  //   console.log(response);
  // }
  // getFlight = () => $.ajax({
  //   url: 'https://api.aviationstack.com/v1/flights',
  //   data: {
  //     access_key: 'API_key'
  //   },
  //   dataType: 'json',
  //   success: function (apiResponse) {
  //     if (Array.isArray(apiResponse['results'])) {
  //       apiResponse['results'].forEach(flight => {
  //         if (!flight['live']['is_ground']) {
  //           console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
  //             `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
  //             `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
  //         }
  //       });
  //     }
  //   }
  // });


  render() {
    return (
      <div>
        <Conditions getFlight={this.getFlight} />
      </div>
    )
  }
}

export default App;

