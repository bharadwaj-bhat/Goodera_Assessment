// import { generateArray } from "./bubbleSort";
import styles from "../App.module.css";
import { useEffect, useState } from "react";

function wait() {
  return new Promise((ac) => {
    setTimeout(() => {
      ac();
      return;
    }, 50);
  });
}

export const MergeSort = ({ wait, generateArray, arr }) => {
  const [nums, setNums] = useState([]);
  const [active, setActive] = useState(-20);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // let arr = generateArray();
    setNums(arr);
    // console.log(arr);
  }, [arr]);

  const mergeArrays = async (arr, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;

    let left = [];
    let right = [];

    for (let i = 0; i < n1; i++) {
      left[i] = arr[l + i];
    }

    for (let j = 0; j < n2; j++) {
      right[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
      setCounter((prev) => prev + 1);
      if (left[i] <= right[j]) {
        setActive(k);
        arr[k] = left[i];
        let x = [...arr];
        setNums(x);
        i++;
      } else {
        setActive(k);
        arr[k] = right[j];
        let x = [...arr];
        setNums(x);
        j++;
      }
      k++;
      await wait();
    }

    while (i < n1) {
      setActive(k);
      arr[k] = left[i];
      let x = [...arr];
      setNums(x);
      i++;
      k++;
    }
    while (j < n2) {
      setActive(k);
      arr[k] = right[j];
      let x = [...arr];
      setNums(x);
      j++;
      k++;
    }

    let x = [...arr];
    setNums(x);
    setActive(-10);
  };

  const handleSort = async (a, l, r) => {
    if (l >= r) {
      let x = [...a];
      setNums(x);
      setActive(-10);
      return;
    }
    const m = l + Math.floor((r - l) / 2);
    await handleSort(a, l, m);
    await handleSort(a, m + 1, r);
    wait();
    await mergeArrays(a, l, m, r);
  };

  // const handleSort = () => {

  // }

  const handleRandomnArray = () => {
    setCounter(0);

    let arr = generateArray();
    setNums(arr);
  };

  return (
    <>
      <div className={styles.container}>
        {nums &&
          nums.map((n, i) => (
            <div
              style={{
                background: i === active ? "#ffce42" : "#63d2dd",
                height: `${n * 4.5}px`,
              }}
            >
              {/* {n} */}
            </div>
          ))}
        <div></div>
      </div>
      <button
        onClick={() => {
          setCounter(0);
          handleSort(nums, 0, nums.length - 1);
        }}
      >
        {" "}
        Sort the array{" "}
      </button>
      <button
        onClick={() => {
          let temp = [...nums];
          setNums(temp);
        }}
      >
        {" "}
        temp{" "}
      </button>
      <button onClick={handleRandomnArray}> Randomn Array</button>
      <h5> Quick - Comparisons: {counter}</h5>
    </>
  );
};