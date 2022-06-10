import { useEffect } from "react";
import { useState } from "react";
import { Dish } from "types";
import "../../Menu/menu.scss";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function sortDishes(dishes: Dish[], sort: string, k = 1) {
  const tmp = [...dishes];
  tmp.sort((a, b) => {
    if (a[sort as keyof Dish] > b[sort as keyof Dish]) {
      return 1 * k;
    }
    if (a[sort as keyof Dish] < b[sort as keyof Dish]) {
      return -1 * k;
    }
    return 0;
  });
  return tmp;
}

const Dishes = ({
  dishes,
  handleAdd,
  handleRemove,
}: {
  dishes: Dish[];
  handleAdd: any;
  handleRemove: any;
}) => {
  const [sort, setSort] = useState("name");
  const [sortedDishes, setSortedDishes] = useState(sortDishes(dishes, sort));

  useEffect(() => {
    setSortedDishes(sortDishes(dishes, sort, sort === "name" ? 1 : -1));
  }, [sort, dishes]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-10 ring-1 ring-gray-600 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-600">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                <h2 style={{ fontWeight: "400", fontSize: "40px" }}>Jelo</h2>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                <h2 style={{ fontWeight: "400", fontSize: "30px" }}>
                  Energija
                </h2>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                <h2 style={{ fontWeight: "400", fontSize: "30px" }}>
                  Ugljikohidrati
                </h2>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                <h2 style={{ fontWeight: "400", fontSize: "30px" }}>
                  Proteini
                </h2>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                <h2 style={{ fontWeight: "400", fontSize: "30px" }}>Masti</h2>
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedDishes.map((dish: Dish, dishIdx: number) => (
              <tr key={dishIdx}>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-4 pl-4 sm:pl-6 pr-3 text-sm"
                  )}
                >
                  <div className="font-medium text-gray-900">
                    <div style={{ fontWeight: "400", fontSize: "20px" }}>
                      {dish.name}
                    </div>
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                 
                  </div>
                  {dishIdx !== 0 ? (
                    <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" />
                  ) : null}
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  <div style={{ fontWeight: "400", fontSize: "20px" }}>
                    {dish.energy} kcal
                  </div>
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  <div style={{ fontWeight: "400", fontSize: "20px" }}>
                    {dish.carbohydrates} g
                  </div>
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  <div style={{ fontWeight: "400", fontSize: "20px" }}>
                    {dish.proteins} g
                  </div>
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  <div style={{ fontWeight: "400", fontSize: "20px" }}>
                    {dish.fat} g
                  </div>
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium"
                  )}
                >
                  <button
                    type="button"
                    className="listbutton"
                    onClick={() => handleRemove(dish)}
                  >
                    Ukloni<span className="sr-only">, {dish.name}</span>
                  </button>{" "}
                  <button
                    type="button"
                    className="listbutton2"
                    onClick={() => handleAdd(dish)}
                  >
                    Dodaj<span className="sr-only">, {dish.name}</span>
                  </button>
                  {dishIdx !== 0 ? (
                    <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Meni</option>
          <option value="name">Jelo A-Z</option>
          <option value="proteins">Proteini više prema manje</option>
          <option value="energy">Kalorije više prema manje</option>
        </select>
      </div>
    </div>
  );
};

export default Dishes;
