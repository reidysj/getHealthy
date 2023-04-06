import { useEffect, useState } from "react";
import { handleSubmit, handleChange } from "../utils/eventHandlers";
import { useNavigate } from "react-router-dom";
import { Stack, Input, Select, Button } from "@chakra-ui/react";
import { axiosGet } from "../utils/customAxios";

export default function GoalsForm() {
  const [goalInfo, setGoalInfo] = useState({
    goal: "",
    selectedGoal: "",
    userToken: localStorage.getItem("token"),
  });

  const [suggestedGoals, setSuggestedGoals] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = () => {
      return axiosGet("goals").then((data) => {
        setSuggestedGoals(data);
      });
    };

    fetchSuggestions();
  }, []);

  const submit = async (e: { preventDefault: () => void }) => {
    handleSubmit(e, "goals", goalInfo).then((data: any) => {
      navigate("/dashboard");
    });
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e, setGoalInfo, goalInfo);
  };

  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGoalInfo({ ...goalInfo, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submit}>
      <Stack spacing="3" width="30%">
        <Input
          placeholder="What would you like to achieve?"
          name="goal"
          onChange={change}
          value={goalInfo.goal}
        />
        <Button type="submit">Add Goal</Button>
        <p>
          ------OR------
          <br /> Would you like inspiration from other user's goals?
        </p>
        <Select
          placeholder="Goal Ideas"
          onChange={select}
          value={goalInfo.selectedGoal}
          name="selectedGoal"
        >
          {suggestedGoals.map((goal, i) => {
            return (
              <option value={goal.guid} key={i}>
                {goal.goal}
              </option>
            );
          })}
        </Select>
        <Button type="submit">Use this Goal</Button>
      </Stack>
    </form>
  );
}
