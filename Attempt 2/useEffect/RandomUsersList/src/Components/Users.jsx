function Users({ first, last, picture, email, phone, city }) {
  console.log(first, last, picture, email, phone, city);
  return (
    <>
      <div className="w-80 h-80 m-10 p-4 shadow-lg bg-white text-center">
        <div className="h-1/2 flex justify-center m-2">
          <img src={picture} className="rounded-full " />
        </div>
        <div className="h-1/2 ">
          <div className="font-semibold">
            {first} {last}
          </div>
          <div className="text-sm text-gray-400">email : {email}</div>
          <div className="text-sm text-gray-400">phone : {phone}</div>
          <div className="text-sm text-gray-400">city: {city}</div>
        </div>
      </div>
    </>
  );
}

export default Users;
