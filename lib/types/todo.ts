/**
 * Interface for a To-Do item.
 */
export interface Todo {
  /**
   * Unique identifier for the To-Do item.
   */
  id: string;
  /**
   * The task description.
   */
  text: string;
  /**
   * Completion status of the To-Do item.
   */
  completed: boolean;
}