import { useState } from "react";

export default function useForm(initialData) {
  const [state, setState] = useState(initialData);

  const handleChange = function (e) {
    setState(e.target.value);
  };

  const reset = function () {
    setState(initialData);
  };

  return [state, handleChange, reset];
}
