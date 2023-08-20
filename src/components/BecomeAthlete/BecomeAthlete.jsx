import { create } from '../../utilities/athletes-service'; // Import the createAthlete function
import { useState } from 'react';


export default function BecomeAthlete({ user }) {
  const initialAthleteData = {
    user: user._id,
    sportType: '',
    personalRecord: '',
    height: '',
    weight: '',
    achievements: '',
    socials: '',
    status: 'Pending',
  };
  const [athleteData, setAthleteData] = useState(initialAthleteData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setAthleteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const athlete = await create(athleteData); // Call the create function
      console.log('New Athlete:', athlete);
      // Handle success, show a message, or redirect the user
      setAthleteData(initialAthleteData); // Reset form fields
    } catch (error) {
      console.error('Error creating athlete:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <>
      <h1>Become Athlete</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Sport Type:
          <input
            type="text"
            name="sportType"
            value={athleteData.sportType}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Personal Record:
          <input
            type="number"
            name="personalRecord"
            value={athleteData.personalRecord}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            name="height"
            value={athleteData.height}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={athleteData.weight}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Achievements:
          <textarea
            name="achievements"
            value={athleteData.achievements}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Socials:
          <input
            type="text"
            name="socials"
            value={athleteData.socials}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
