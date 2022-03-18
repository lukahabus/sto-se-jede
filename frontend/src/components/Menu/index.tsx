import useSWR from "swr";

import { fetcher } from "../../utils/net";

const Menu = () => {
  const { data, error } = useSWR("http://localhost:3001/scrape_menu", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Menu;
