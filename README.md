# KPI Generator

Author : @vishalx360

This tool generates CSV files for pull requests made by a single user. You can import these CSV files into Google Sheets and then copy the data into a Notion table.


## Usage Instructions

1. **Clone the Repository**: Clone the repository to your local machine using Git.

    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**: Navigate to the project directory and run the following command to install the required dependencies.

    ```bash
    npm install
    ```

3. **Configure Settings**: Open the `config.json` file and add the necessary information as per your requirements.

4. **Get JSON Data Link**:
   
    - Run the command:
      
      ```bash
      npm run link
      ```
      
    - Copy the JSON data link generated.

5. **Paste JSON Data**: Create a file named `input.json` in the root directory of the project. Paste the JSON data obtained from the previous step into this file.

6. **Generate CSV File**: Run the following command to generate the CSV file.
   
    ```bash
    npm start
    ```

7. **Locate CSV Output**: Once the process is complete, the CSV file will be generated in the `output` folder within the project directory.

8. **Import to Google Sheets**: Import the generated CSV file into Google Sheets.

9. **Copy Data to Notion Table**: After importing the data into Google Sheets, copy the relevant data and paste it into the designated table in your Notion workspace.

These steps aim to simplify the process and provide clear instructions for each stage of the workflow. If you encounter any issues or have questions, feel free to reach out for further assistance!