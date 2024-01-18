import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Sample data (replace this with your own dataset)
months = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])  # Months
miles_run = np.array([50, 60, 75, 90, 110, 130, 150, 170, 190, 210, 230, 250])  # Miles run

# Reshape the input data to meet scikit-learn's requirements
months = months.reshape(-1, 1)

# Create a linear regression model
model = LinearRegression()

# Train the model
model.fit(months, miles_run)

# Predict future miles run
future_months = np.array([13, 14, 15, 16])  # Replace with your desired future months
future_months = future_months.reshape(-1, 1)
future_miles = model.predict(future_months)

# Plot the results
plt.scatter(months, miles_run, label='Training Data')
plt.plot(np.concatenate((months, future_months)), np.concatenate((miles_run, future_miles)), label='Regression Line', color='red')
plt.scatter(future_months, future_miles, color='red', label='Future Predictions')
plt.xlabel('Months')
plt.ylabel('Miles Run')
plt.legend()
plt.show()

# Print future predictions
for month, miles in zip(future_months.flatten(), future_miles):
    print(f"Month {month}: Predicted Miles Run = {miles:.2f} miles")
