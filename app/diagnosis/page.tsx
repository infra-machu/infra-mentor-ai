"use client";

import { useState } from "react";
import { commonQuestions } from "@/data/commonquestions";
import { categories } from "@/data/categories";
import { vdiQuestions } from "@/data/vdiQuestions";
export default function DiagnosisPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({
    category: categories[0],
  });


  const handleAnswerChange = (key: string, value: string) => {
    setAnswers({
      ...answers,
     [key]: value,
     });
  };

  const categoryQuestions =
    answers.category === "仮想端末（VDI）"
    ? vdiQuestions
    : [];

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white w-[700px] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Infra Mentor AI
        </h1>
        <p className="mt-2 text-gray-500">
          共通情報を入力してください
        </p>
      <div className="mt-8">

          <label className="block font-semibold">
            カテゴリ
          </label>

       <select
         className="border rounded-lg p-2 w-full mt-2"
            value={answers.category}
            onChange={(e) => {
              setAnswers({
                category: e.target.value,
              });
            }}
        
         >
         {categories.map((category) => (
            <option key={category}>
             {category}
            </option>
        ))}
        </select>
        </div>
        <div className="mt-8">

           {commonQuestions.map((question) => (
          <div key={question.id} className="mt-8">
            <label className="block font-semibold">
             {question.question}
            </label>

           {question.type === "radio" && (
              <div className="mt-3 space-y-2">

             {question.options?.map((option) => (
             <label key={option} className="block">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={(e) =>
                   handleAnswerChange(
                    question.id,
                     e.target.value
                  )
                }
              />
              <span className="ml-2">
              {option}
              </span>
              </label>

            ))}

            </div>
             )}

            {question.type === "text" && (
           <input
              className="border rounded-lg p-2 w-full mt-2"
              onChange={(e) =>
                handleAnswerChange(question.id, e.target.value)
            }
           />
            )}

            {question.type === "textarea" && (
            <textarea
              className="border rounded-lg p-2 w-full mt-2"
              onChange={(e) =>
                handleAnswerChange(question.id, e.target.value)
            }/>
            )}

            </div>
          ))}
          {categoryQuestions.length > 0 && (
          <section className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-bold text-blue-700">
            VDI固有の確認
          </h2>

             {categoryQuestions.map((question) => (
              <div key={question.id} className="mt-8">
                <label className="block font-semibold">
               {question.question}
               </label>

                <div className="mt-3 space-y-2">
               {question.options.map((option) => (
                 <label key={option} className="block">
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={(e) =>
                      handleAnswerChange(
                        question.id,
                        e.target.value
                      )
                    }
                  />
                    <span className="ml-2">
                     {option}
                    </span>
                  </label>
               ))}
              </div>
              {answers[question.id] === "確認方法が分からない" &&
                 "helpText" in question && (
                   <div className="mt-4 rounded-lg bg-blue-50 p-4 text-sm text-slate-700">
                    {question.helpText}
                   </div>
              )}
            </div>
          ))}
        </section>
      )}

          </div>

        <button
        onClick={() => console.log(answers)}
        className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
        次へ
        </button>
        <pre className="mt-6 bg-slate-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
        {JSON.stringify(answers, null, 2)}
        </pre>
      </div>
    </main>
  );
}