import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/actions";
import css from "./StatusFilter.module.scss";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch()

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
