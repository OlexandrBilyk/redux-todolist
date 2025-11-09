import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import css from "./StatusFilter.module.scss";

export const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);

  return (
    <div>
      <Button selected={statusFilters.all === filter.all}>All</Button>
      <Button selected={statusFilters.active === filter.active}>Active</Button>
      <Button selected={statusFilters.completed === filter.completed}>
        Completed
      </Button>
    </div>
  );
};
