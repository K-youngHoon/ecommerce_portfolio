import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@src/stores";
import styles from "./modalWrapper.module.scss";
export const ModalWrapper = () => {
  const { modal } = useStore().config();

  return (
    <AnimatePresence>
      {modal.isOpen && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => modal.update({ isOpen: false })}
        >
          <motion.div
            className={styles.default_modal}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {typeof modal.content === "string" ? modal.content : modal.content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
