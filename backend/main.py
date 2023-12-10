# Import necessary modules
import tkinter as tk
from Timer import TimeAndDay


if __name__ == "__main__":
    # Create the main application
    root = tk.Tk()
    root.title("Smart Mirror")
    root.configure(bg="black")

    # Creates a frame for time and date
    top = tk.Frame(root, bg="black")
    top.pack(side=tk.TOP, fill=tk.BOTH)

    # Create a TimeAndDay widget
    time_and_day = TimeAndDay(top)
    time_and_day.pack(side=tk.RIGHT, anchor=tk.N, pady=10)

    root.mainloop()
