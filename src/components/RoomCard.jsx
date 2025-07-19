export default function RoomCard({ room }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">{room.description}</p>
        <p className="text-muted">Price: ₹{room.price}/night</p>
        <a href="/booking" className="btn btn-outline-primary">Book Now</a>
      </div>
    </div>
  );
}
