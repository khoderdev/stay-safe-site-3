import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import questions from "./questions";
import { inputStyles } from "../../utils/styles";

const FoodAndNutrition = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 8 },
    })
  );

  // Animation variants
  const questionVariants = {
    initial: { scale: 1 },
    drag: { scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" },
    hover: { scale: 1.02 },
  };

  const dropTargetVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, opacity: 0.9 },
  };

  const DraggableQuestion = () => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      isDragging: isCurrentDragging,
    } = useDraggable({
      id: "question",
    });

    const style = transform
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          zIndex: isCurrentDragging ? 1000 : 1,
        }
      : undefined;

    return (
      <motion.div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        variants={questionVariants}
        initial="initial"
        whileHover="hover"
        whileDrag="drag"
        className={`col-span-2 place-self-center flex justify-center items-center w-48 h-44 sm:w-72 sm:h-64 bg-[#b0e1ec] sm:text-[1.2rem] leading-snug sm:font-semibold p-4 rounded-md text-gray-800 shadow-lg cursor-grab transition-all ${
          shake ? "animate-shake" : ""
        } ${isCurrentDragging ? "cursor-grabbing" : ""}`}
      >
        <span className="text-center">
          {questions[currentQuestion].question}
        </span>
      </motion.div>
    );
  };

  const DroppableOption = ({ id, children, className }) => {
    const { isOver, setNodeRef } = useDroppable({
      id,
    });

    return (
      <motion.div
        ref={setNodeRef}
        variants={dropTargetVariants}
        initial="initial"
        whileHover="hover"
        className={`${className} ${
          isOver ? "bg-opacity-70 scale-105 ring-opacity-80" : ""
        } transition-all duration-300 ease-out`}
      >
        {children}
      </motion.div>
    );
  };

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(
    ({ active, over }) => {
      setIsDragging(false);
      if (!over) return;

      const selectedOption = over.id;
      const isCorrect = selectedOption === questions[currentQuestion].answer;

      setAnswers((prev) => [
        ...prev,
        { questionId: questions[currentQuestion].id, isCorrect },
      ]);

      if (isCorrect) {
        setScore((prev) => prev + 1);
        if (currentQuestion < questions.length - 1) {
          setTimeout(() => {
            setCurrentQuestion((prev) => prev + 1);
          }, 300);
        } else {
          setShowResults(true);
        }
      } else {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    },
    [currentQuestion, questions]
  );

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setShowResults(false);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const text = `How Much Do You Know\n About Food and Nutrition?`;
  const words = text.split(" ");

  const containerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scoreVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col md:flex md:flex-row items-center justify-center p-0 bg-cover bg-center"
    >
      <div className="right-col md:w-[60%] pb-10 flex-wrap">
        <div className="flex items-center p-4 h-52 flex-wrap">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerAnimation}
            className="text-3xl sm:text-4xl text-center dark:text-white-bg leading-relaxed md:text-5xl md:leading-relaxed font-semibold m-0 uppercase break-words md:flex-wrap"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordAnimation}>
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="flex w-full h-fit justify-center items-center text-center">
          <AnimatePresence mode="wait">
            {showResults ? (
              <motion.div
                key="results"
                variants={scoreVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center"
              >
                <h2
                  className="text-3xl text-[#c2c36b] font-semibold mb-10"
                  style={{
                    textShadow:
                      "0 0 8px rgba(34, 197, 94, 0.8), 0 0 1px rgba(34, 197, 94, 0.1)",
                  }}
                >
                  Your Score: {score} / {questions.length}
                </h2>
                <motion.button
                  onClick={handleRestart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${inputStyles()} !w-[65%] !text-black dark:!text-white-bg2 !bg-white-fg hover:!ring-2 focus:!ring-2 !ring-[#c2c36b] dark:!bg-[#000]`}
                >
                  Retake Quiz
                </motion.button>
              </motion.div>
            ) : (
              <DndContext
                sensors={sensors}
                modifiers={[restrictToWindowEdges]}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <div
                  key={currentQuestion}
                  className="grid grid-cols-2 gap-8 gap-y-12 sm:gap-20 relative"
                >
                  <DraggableQuestion />

                  <DroppableOption
                    id="True"
                    className="w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-[#c2c36b] shadow-lg ring-[#c2c36b] ring-inset ring-4"
                  >
                    True
                  </DroppableOption>

                  <DroppableOption
                    id="False"
                    className="w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-pink shadow-lg ring-pink ring-inset ring-4"
                  >
                    False
                  </DroppableOption>

                  <DragOverlay>
                    {isDragging && (
                      <div
                    
                        className="w-48 h-44 sm:w-72 sm:h-64 bg-[#b0e1ec] sm:text-[1.2rem] leading-snug sm:font-semibold p-4 rounded-md text-gray-800 shadow-xl opacity-90 flex justify-center items-center"
                      >
                        {questions[currentQuestion].question}
                      </div>
                    )}
                  </DragOverlay>
                </div>
              </DndContext>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FoodAndNutrition;
