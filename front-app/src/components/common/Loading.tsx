import { useStore } from "@src/stores";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./loading.module.scss";

const Loading = () => {
  const { loading } = useStore().config();
  return (
    <AnimatePresence>
      {loading.isActive && (
        <motion.div
          className={styles.loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>☺</p>
          <p>Page Loading...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Loading };
