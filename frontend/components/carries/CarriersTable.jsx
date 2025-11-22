import Link from "next/link";

export default function CarriersTable() {
  const carriers = [
    {
      name: "Global Life Insurance",
      code: "GLI",
      status: "Active",
      bonus: "Gold",
      linked: 12,
      created: "Sep 30, 2025",
    },
    {
      name: "Global Life Insurance",
      code: "HSC",
      status: "Active",
      bonus: "Silver",
      linked: 12,
      created: "Sep 30, 2025",
    },
    {
      name: "Global Life Insurance",
      code: "SHM",
      status: "Active",
      bonus: "Platinum",
      linked: 12,
      created: "Sep 30, 2025",
    },
    {
      name: "Global Life Insurance",
      code: "SHM",
      status: "Active",
      bonus: "Platinum",
      linked: 12,
      created: "Sep 30, 2025",
    },
    {
      name: "Global Life Insurance",
      code: "SHM",
      status: "Active",
      bonus: "Platinum",
      linked: 12,
      created: "Sep 30, 2025",
    },
    {
      name: "Global Life Insurance",
      code: "SHM",
      status: "Active",
      bonus: "Platinum",
      linked: 12,
      created: "Sep 30, 2025",
    },
    {
      name: "Global Life Insurance",
      code: "SHM",
      status: "Active",
      bonus: "Platinum",
      linked: 12,
      created: "Sep 30, 2025",
    },
  ];

  const badge = (type) => {
    if (type === "Active")
      return (
        <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 border border-green-200">
          ✓ Active
        </span>
      );

    return (
      <span className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-500 border border-red-200">
        ✕ Inactive
      </span>
    );
  };

  const bonusBadge = (b) => {
    const map = {
      Gold: "bg-yellow-100 text-yellow-700",
      Silver: "bg-gray-200 text-gray-700",
      Platinum: "bg-purple-100 text-purple-700",
    };

    return (
      <span className={`px-3 py-1 text-xs rounded-full ${map[b]}`}>
        {b}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr className="text-left text-sm text-gray-600">
            <th className="py-3 px-5">CARRIER NAME</th>
            <th className="py-3 px-5">CODE</th>
            <th className="py-3 px-5">STATUS</th>
            <th className="py-3 px-5">BONUS LEVEL</th>
            <th className="py-3 px-5">LINKED AGENTS</th>
            <th className="py-3 px-5">CREATED ON</th>
            <th className="py-3 px-5">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {carriers.map((c, i) => (
            <tr key={i} className="border-b border-gray-100 text-sm">
              <td className="py-4 px-5">{c.name}</td>

              <td className="py-4 px-5">
                <span className="px-2 py-1 text-xs rounded-lg bg-gray-100">
                  {c.code}
                </span>
              </td>

              <td className="py-4 px-5">{badge(c.status)}</td>

              <td className="py-4 px-5">{bonusBadge(c.bonus)}</td>

              <td className="py-4 px-5">{c.linked}</td>

              <td className="py-4 px-5">{c.created}</td>

              <td className="py-4 px-5 flex gap-3">
                <Link href="/carriers/carrier-details" className="text-[#1677FF] hover:underline">
                  Details
                </Link>
                <span className="text-gray-600 cursor-pointer hover:underline">
                  Statement
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <div className="flex items-center justify-between px-5 py-4 text-sm text-gray-600">
        <p>Showing 1–6 of 8 carriers</p>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-lg bg-white">Previous</button>
          <button className="px-3 py-1 rounded-lg bg-[#1677FF] text-white">1</button>
          <button className="px-3 py-1 border rounded-lg">2</button>
          <button className="px-3 py-1 border rounded-lg">3</button>
          <button className="px-3 py-1 border rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
}
