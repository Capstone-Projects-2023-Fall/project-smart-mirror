import tkinter as tk
from time import strftime

class TimeAndDay(tk.Frame):
    
    def __init__(self, master):
        super().__init__(master, background="black")

        # Create time label
        self.label_time = tk.Label(self, font="dreams 40", bg="black", fg="white")
        self.label_time.pack(side=tk.TOP, anchor="e")

        # Create date label
        self.label_day = tk.Label(self, font="dreams 28", bg="black", fg="white")
        self.label_day.pack(side=tk.TOP, anchor="e")

        # Create day of week label
        self.label_day_of_the_week = tk.Label(self, font="dreams 28", bg="black", fg="white")
        self.label_day_of_the_week.pack(side=tk.TOP, anchor="e")

        # Update time
        self.update_time()

    def update_time(self):

        # Get current time, date, and day of the week
        time2 = strftime("%I:%M:%S %p")
        day2 = strftime("%B %d, %Y")
        day_of_the_week2 = strftime("%A")

        # Update time, day and week of the day label
        self.label_time.config(text=time2)
        self.label_day.config(text=day2)
        self.label_day_of_the_week.config(text=day_of_the_week2)

        # Schedule next update within 200ms 
        self.after(200, self.update_time)
