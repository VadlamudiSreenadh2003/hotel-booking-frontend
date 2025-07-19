export default function AmenityCard({ amenity }) {
  return (
    <div className="border rounded p-4 shadow bg-white text-center">
      <i className={`bi ${amenity.icon} fs-1 text-primary mb-3`}></i>
      <h3 className="h5">{amenity.name}</h3>
      <p className="text-muted">{amenity.description}</p>
    </div>
  );
}
