import * as React from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

interface ForStates {
  numbers: boolean;
  characters: boolean;
  symbols: boolean;
}
const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeStates, setIncludeStates] = useState<ForStates>({
    numbers: false,
    symbols: false,
    characters: false,
  });
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setIsCoupon] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setIncludeStates((prev) => ({ ...prev, [name]: checked }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !includeStates.symbols &&
      !includeStates.characters &&
      !includeStates.numbers
    ) {
      alert("Please Select One At Least");
    }
    let result: string = prefix || "";
    
  };
  const copyText = (coupon: string) => {};
  return (
    <div className="adminContainer">
      <Sidebar></Sidebar>
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              maxLength={size}
              minLength={8}
            />
            <fieldset>
              <legend>Options</legend>
              <input
                type="checkbox"
                checked={includeStates.numbers}
                onChange={handleChange}
                maxLength={size}
                name="numbers"
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeStates.symbols}
                onChange={handleChange}
                maxLength={size}
                name="symbols"
              />
              <span>Symbols</span>
              <input
                type="checkbox"
                checked={includeStates.characters}
                onChange={handleChange}
                maxLength={size}
                name="characters"
              />
              <span>Characters</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
