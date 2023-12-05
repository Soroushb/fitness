// useBurnedCalories.js
const useBurnedCalories = async (id, activityMin, weight) => {
    try {
      const response = await fetch(`https://fitness-calculator.p.rapidapi.com/burnedcalorie?activityid=${id}&activitymin=${activityMin}&weight=${weight}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a77f543c33msh8be63dd0e0e154bp169eb1jsn3aceee7b6e2c',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        },
      });
  
      const data = await response.json();
      return { data, error: null, isLoading: false };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { data: null, error, isLoading: false };
    }
  };
  
  export default useBurnedCalories;
  