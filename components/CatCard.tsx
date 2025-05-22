type Cat = {
  id: string;
  name: string;
  age: string;
  breed: string;
  gender: string;
  vaccinated: boolean;
  images: string[];
};

export default function CatCard({ cat }: { cat: Cat }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={cat.images[0]}
        alt={cat.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{cat.name}</h2>
      <p className="text-gray-600">年龄：{cat.age}</p>
      <p className="text-gray-600">品种：{cat.breed}</p>
    </div>
  );
}
