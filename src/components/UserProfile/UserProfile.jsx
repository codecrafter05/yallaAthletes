export default function UserProfile({user}) {
  return (
    <>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Gender: {user.gender}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
          <p>Nationality: {user.nationality}</p>
          {/* Display other user details here */}
        </div>
      )}
    </>
  );
}