---
title: 'American Attitudes Project'
subtitle: 'Is America’s Glass Half-Empty? Discovering drivers of America’s prospective thinking.'
date: 2021-11-14 00:00:00
description: Our team acquired survey data from the Pew Research Panel, and we explored the drivers of pessimism in American Prospective Attitudes. Understanding what most likely drives pessimistic or optimistic thinking about the future will help business leaders clarify strategies for moving forward and guide expectations of future success in the customers they serve, products offered, investments made, in Marketing and Sales, and throughout their business organization.
thumbnail_image: '/images/american_attitudes/glass_half_full.jpeg'
featured_image: '/images/american_attitudes/pew_research_center.jpeg'
---

![glass_half_full_image](/images/american_attitudes/glass_half_full.jpeg)

### Date: November 14, 2021

# My Teammates

These are the wonderful people that were apart of this awesome project.

<table>
<tr>
	<td><center><h2>Alexia Garces</h2></center></td>
	<td><center><h2>Brooke Garces</h2></center></td>
</tr>
<tr>
	<td>
	<center><a href="https://github.com/Alexia-Garces" target="_blank">
			<img src="https://avatars.githubusercontent.com/u/85951697?v=4">
		</a></center>
	</td>
	<td>
	<center><a href="https://github.com/Brooke-Holyoak" target="_blank">
		<img src="https://avatars.githubusercontent.com/u/85950784?v=4">
	</a></center>
	</td>
</tr>
<tr>
<td><center><h2>Jason Tellez</h2></center></td>
<td><center><h2>Malachi Hale</h2></center></td>
</tr>
<tr>
	<td>
	<center><a href="https://github.com/Jason-Tellez" target="_blank">
		<img src="https://avatars.githubusercontent.com/u/85950634?v=4">
	</a></center>
	</td>
	<td>
	<center><a href="https://github.com/malachi-hale" target="_blank">
		<img src="https://avatars.githubusercontent.com/u/85951217?v=4">
    </a></center>
	</td>
</tr>
</table>


<a name ='toc'></a>
# Table of Contents 
1. [Project Planning](#project_planning)
    1. [Project Objectives](#project_objectives)
    2. [Business Goals](#business_goals)
    3. [Audience](#audience)
    4. [Deliverables](#deliverables)
2. [Executive Summary](#exe_sum)
    1. [Goals](#goals)
    2. [Findings](#findings)
3. [Acquire Data](#acquire)
    1. [Working with American Trends Panel Data](#working_with_data)
    2. [Data Dictonary](#data_dict) 
    3. [Acquire Takeaways](#acquire_takeaways)
4. [Prepare Data](#prep_data)
    1. [Distributions](#distributions)
    2. [Prepare Takeaways](#prepare_takeaways)
5. [Data Exploration](#explore)
    1. [Correlations](#correlations)
    2. [Pairplot](#pairplot)
    3. [Hypothesis & Testing](#hypotheses)
    4. [Explore Takeaways](#explore_takeaways)
6. [Modeling & Evaluation](#modeling)
    1. [Baseline](#baseline)
    2. [Decision Tree](#decision_tree)
    3. [Random Forest](#random_forest)
    4. [K Nearest Neighbors](#knn)
    5. [Other Models](#other_models)
    6. [Feature Importance](#feature_importance)
    7. [Modeling with just the top features](#top)
    9. [Model Comparison](#model_comparison)
    10. [Out of Sample Testing](#out_of_sample)
    11. [Modeling the Gender Subsets](#modeling_gender)
    12. [Modeling the Political Party Subsets](#modeling_politics)
    13. [Modeling the Income Level Subsets](#modeling_income_level)
    14. [Modeling the Education Level Subsets](#modeling_education_level)
    15. [Modeling Takeaways](#modeling_takeaways)
7. [Project Delivery](#delivery)
    1. [Conclusion & Next Steps](#conclusion_and_next_steps)
    2. [Project Replication](#replicate)
    3. [Data Use Agreements](#data_use)

<hr style="border-top: 10px groove tan; margin-top: 5px; margin-bottom: 5px">

<a name='project_planning'></a>
# Project Planning
✓ 🟢 **Plan** ➜ ☐ _Acquire_ ➜ ☐ _Prepare_ ➜ ☐ _Explore_ ➜ ☐ _Model_ ➜ ☐ _Deliver_

<a name='project_objectives'></a>
## Project Objectives 
> - Utilize American Trends Panel Datasets (downloadable <a href="https://www.kaggle.com/shankanater/american-trends-panel-pewresearch/download">here</a>), with statistical modeling techniques to assess and attempt to predict sentiment toward particular topics.
> - This will culminate into a well-built well-documented jupyter notebook that contains our process and derivation of these predictions.
> - Modules will be created that abstract minutiae aspects of the data pipeline process.

<a name='business_goals'></a>
## Business Goals 
> - Utilize tabulated statistical data aquired from Pew Research American Trends Surveys.
> - Prepare, explore and formulate hypthoesis about the data.
> - Build models that can predict future American sentiment toward certain topics, and utilize hyperparameter optimization and feature engineering to improve validation model performance prior to evaluating on test data.
> - Document all these steps throughly.

<a name='audience'></a>
## Audience 
> - General population and individuals without specific knowledge or understanding of the topic or subject.

<a name='deliverables'></a>
## Deliverables
> - A clearly named final notebook. This notebook will contain more detailed processes other than noted within the README and have abstracted scripts to assist on readability.
> - A README that explains what the project is, how to reproduce the project, and notes about the project.
> - A Python module and associated modules that automate the data acquisition and preparation process. 

<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">

<a name='exe_sum'></a>
# Executive Summary
> - Our team acquired Pew Research Panel survey data and utilized this data to explore the drivers of pessimism in American Prospective Attitudes.
> - Being able to understand what most likely drives pessimistic or optimistic thinking about the future will help business leaders clarify strategies for moving foward.
> - This project will also help guide expectations of future sucess in the customers these business leaders serve, in addition to the products offered, investment, marketing and sales, and other aspects throughout their organization. 

<a name='goals'></a>
## Goals
> - Build a model that can predict future American sentiment toward certain topics, utilizing split survey data as the training dataset.

<a name='findings'></a>
## Findings
> - Standard demographic features like age, sex, and income are not drivers of overall pessimism. However, features like what will happen to the average family's standard of living, cost of healthcare, and the future of the public education system are highly correlated to overall pessimism.

<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">

<a name='acquire'></a>
# Acquire Data
✓ _Plan_ ➜ 🟢 **Acquire** ➜ ☐ _Prepare_ ➜ ☐ _Explore_ ➜ ☐ _Model_ ➜ ☐ _Deliver_

> - The data is acquired from Pew Research Panel survey data that asks various demographic questions in conjunction with the survey questions themselves.
> - The questions all ask for categorical responses from the individuals and the questions pertain to various topics of American life, such as politics and economics.

<a name="working_with_data"></a>
## Working with American Trends Panel Data 

### Demographic Profile Variables
> - Each ATP dataset comes with a number of variables prefixed by “F_” (for “frame”) that contain demographic profile data. These variables are not measured every wave; instead, they are sourced from panel profile surveys conducted on a less frequent basis. Some profile variables are also occasionally asked on panel waves and are accordingly updated for each panelist. Profile information is based on panelists’ most recent response to the profile questions. Some variables are coarsened to help protect the confidentiality of our panelists. Interviewer instructions in `[ ]` and voluntary responses in `( )` are included if the source of a profile variable was ever presented in phone (CATI) mode. See Appendix I for the profile variable codebook.

###  Unique Identifier
> - The variable `QKEY` is a unique identifier assigned to each respondent. `QKEY` can be used to link multiple panel waves together. Note that except in a few instances, `WEIGHT_W41` are only provided for single waves. Use caution when analyzing data from multiple waves without weights that are designed for use with multiple waves.

### Data Variable Types
 > - American Trends Panel datasets contain single-punch or multi-punch variables. For questions in a 'Check all that apply' format, each option has its own variable indicating whether a respondent selected the item or not. For some datasets there is an additional variable indicating whether a respondent did not select any of the options. Open-end string variables are not included in ATP datasets. Coded responses to open-end questions are included when available.

### Dataset Format
> - The dataset is formatted as a .sav file and can be read with the SPSS software program. The dataset can also be read with the R programming language, using the `foreign` package. R is a free, open-source program for statistical analysis that can be downloaded <a href="https://cran.r-project.org/" target="_blank">here</a>. It can also be used to export data in .csv format for use with other software programs.

> - **NOTE**: Using other tools to directly convert the .sav file to another format such as .csv may ERASE value
labels. For this reason, it is highly recommended that you use either SPSS or R to read the file directly.

<a name='data_dict'></a>
## DataFrame Dictionary

> - Data Dictionary can be viewed <a href="data_dictionary.md">here</a>

<a name='acquire_takeaways'></a>
## Takeaways from Acquire:
> - We acquired a DataFrame from a Pew Research Panel survey which contained 2524 observations and 124 columns.
> - Each row represents an individual American adult and his or her responses to the survey questions.
> - Of our 124 columns, 2 are continuous and numeric: `qkey` and `weight`. The remaining 122 columns are categorical features.
	- The `weight` column indicates the corresponding survey weight of each respondent in the sample. The survey weight indicates how representative an observation is of the total population.
> - The survey results provide us with information regarding each respondents' views about the future of the United States. In addition,the acquired data contains demographic data for each respondent, including gender, race, income level, and political affiliation.


<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">


<a name='prep_data'></a>
# Prepare Data
✓ _Plan_ ➜ ✓ _Acquire_ ➜ 🟢 **Prepare** ➜ ☐ _Explore_ ➜ ☐ _Model_ ➜ ☐ _Deliver_

> - We will import our `prepare.py` file, which performs a series of steps to clean and prepare our data: 

> - **First**, we convert the categorical features in the DataFrame to objects.     

> - **Second**, because our target variable will be the respondents' prospective thinking, we drop rows for which the respondent refused to answer the question about prospective thinking in the column `OPTIMISMT_W41`.  

> - **Third**, we rename the columns as indiciated by our data dictionary above.     

> - **Fourth**, from the column `OPTIMIST_W41`, we create new columns `is_pes`, `pes_val`, `is_very_pes`, and `is_very_opt`.  
    - The column `is_pes` introduces a Boolean value where 1 indicates a pessimistic outlook and is 0 indicates an optimistic outlook. 
    - The column `pes_val` ranks a respondent's pessisism, with 0 being the least pessismistic and 3 being the most pessimistic. 
    - The column `is_very_pes` introduces a Boolean value where 1 indicates a very pessimistic outlook and 0 indicates a somewhat pessimistic, somewhat optimistic, or very optimistic outlook. 
    - The column `is_very_opt` introduces a Boolean value where 1 indicates a very optimistic outlook and 0 indicates a somewhat optimistic, somewhat pessimistic, or very pessimistic outlook. 

> - **Fifth**, we create a `replace_key` which transforms every response in the categorical columns to a corresponding numeric value. We also introduce a `revert_key` which reverts the numeric values back to the original string responses.   

> - **Finally**, we convert the column indicating the unique identity of each respondent `QKEY` to an integer. 


> - Additionally, we split the data into `train`, `validate`, and `test` datasets, stratifying on the target feature `is_pes`.


<a name='prepare_takeaways'></a>
## Prepare Takeaways
> - Utilizing the functions in our `prepare.py` we implemented a series of functions to clean our data.


> - We eliminated nine respondents from our dataset because these respondents refused to answer the question `OPTIMIST_W41` about prospective thinking of the US' future. 


> - Our newly created target feature `is_pes` maps the responses to question `OPTIMIST_W41` "Somewhat pessimistic" and "Very pessimistic" as the single Boolean value 1 and the responses "Somewhat optimistic" and "Very optimistic" to the single Boolean value 0. 


> - Stratifying on `is_pes`, we split our data into `train`, `validate`, and `test`, datasets of lengths 1408, 604, and 503, respectively. 
<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">


<a name='explore'></a>
# Explore Data
✓ _Plan_ ➜ ✓ _Acquire_ ➜ ✓ _Prepare_ ➜ 🟢 **Explore** ➜ ☐ _Model_ ➜ ☐ _Deliver_

> - We dropped columns that were too closely related to the derivative of our target column (`is_pes`):
> - Those columns ended up being `avg_family`, `attitude`, `pes_val`, `is_very_pes` and `is_very_opt`.
> - We also dropped `qkey` since it is only an id value and will not provide any information since each is a unique value.
> - We split our train, validate, and test columns to feature dataframes and target series.

## Statistical Test Results

| column_name |    chi2 |       p_val |   deg_free | expected_freq                 |
|:----------------|--------:|------------:|-----------:|:------------------------------|
| `happen_general`  | 309.847 | 5.21955e-68 |          2 | [[ 65.23082386  51.76917614]  |
|                 |         |             |            |  [299.39275568 237.60724432]  |
|                 |         |             |            |  [420.37642045 333.62357955]] |
| `happen_pub_ed`   | 236.57  | 4.26122e-52 |          2 | [[ 75.26633523  59.73366477]  |
|                 |         |             |            |  [411.45596591 326.54403409]  |
|                 |         |             |            |  [298.27769886 236.72230114]] |
| `happen_child_f2` | 180.023 | 8.72154e-39 |          3 | [[152.76278409 121.23721591]  |
|                 |         |             |            |  [210.18821023 166.81178977]  |
|                 |         |             |            |  [ 34.56676136  27.43323864]  |
|                 |         |             |            |  [387.48224432 307.51775568]] |
| `happen_race`     | 157.809 | 5.39807e-35 |          2 | [[317.79119318 252.20880682]  |
|                 |         |             |            |  [398.07528409 315.92471591]  |
|                 |         |             |            |  [ 69.13352273  54.86647727]] |
| `happen_health`   | 145.05  | 3.18329e-32 |          2 | [[447.6953125  355.3046875 ]  |
|                 |         |             |            |  [265.94105114 211.05894886]  |
|                 |         |             |            |  [ 71.36363636  56.63636364]] |

## Univariate Distributions

![univariate_exploration_plots](images/univariate_exploration.jpeg)

### Males vs Females Pessimisim

![Male_vs_female_pessimisim_plot](/images/american_attitudes/fem_male_pessimism_percentage.jpeg)

### Family Income Pessimisim

![family_income_pessimism_plot](/images/american_attitudes/percent_is_pes_by_family_income.jpeg)

### Educational Attainment Pessimisim

![educational_attainment_pessimisim_plot](/images/american_attitudes/percent_is_pes_by_highest_education_six_categories.jpeg)


<a name='hypotheses'></a>
## Hypotheses & Testing

### Hypothesis 1
> - H<sub>0</sub>: Is sex independent of a pessimsitic future outlook?
> - H<sub>a</sub>: Sex is dependent on pessimist future outlook.
> - &#x0251;: 0.05

#### Hypothesis 1 Takeaways 
> - The number of females and males who are overall pessimistic are about the same.
> - The p-value is above 0.05, so we accept the null hypothesis.

### Hypothesis 2
> - H<sub>0</sub>: Is income independent of a pessimistic future outlook?
> - H<sub>a</sub>: Income is dependent on pessimistic future outlook.
> - &#x0251; = 0.05

#### Hypothesis 2 Takeaways 
> - While it appears that people who are middle income earners are more pessimistic, there is no significance for overall income related to overall pessimism.
> - The p-value is above 0.5, so we accept the null hypothesis.

<a name='explore_takeaways'></a>
## Explore Takeaways

> - There a small differences in future outlook when considering sex, income and education.
> - While the small differences exist, they do not appear to be significant.
> - Through chi-squared testing, we verify that there is not a significant relationship between theses features and our target.
> - Even though they are not necessarily drivers of overall future outlook, the findings are still helpful in isolation.


<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">


<a name='modeling'></a>
# Modeling & Evaluation
✓ _Plan_ ➜ ✓ _Acquire_ ➜ ✓ _Prepare_ ➜ ✓ _Explore_ ➜ 🟢 **Model** ➜ ☐ _Deliver_

> - We first have to choose a baseline to compare our models against.
> - The main models we will be using are Decision Tree, Random Forest, and K-Nearest Neighbor.
> - We will use different variations of our models until we determine one model to have outperformed our baseline and to have avoided overfitting or underfitting on the training data.
> - We will also be testing feature importance to see what drives an individual's overall attitude.
> - Once we choose our best model, we will run this model on our Out-of-sample dataset.

<a name='baseline'></a>
## Baseline
> - With a non-pessimistic attitude as our baseline, we calculated our accuracy by asuming that every respondent was non-pressimistic. This method gave us an accuracy of 55.75%. 

<a name='decision_tree'></a>
## Decision Tree
> - Utilizing the `decision_tree_models` function from our `model.py` file, we created a series of Decision Tree models with varying depths. Using our `test_a_model` function from the `model.py`, we calculated the accuracies of these models on the `train` and `validate` datasets for each of these models. 

<a name='random_forest'></a>
## Random Forest 
> - Utilizing the `random_forest_models` function from our `model.py` file, we created a series of Random Forest models with varying depths and min samples leaf. Using our `test_a_model` function from the `model.py`, we calculated the accuracies of these models on the `train` and `validate` datasets for each of these models. 


<a name='knn'></a>
## K Nearest Neighbors
> - Utilizing the `random_forest_models` function from our `model.py` file, we created a series of K Nearest Neighbors models with varying numbers of neighbors. Using our `test_a_model` function from the `model.py`, we calculated the accuracies of these models on the `train` and `validate` datasets for each of these models. 

<a name='other_models'></a>
## Other Models
> - We used the models Linear SVC, Logistic Regression, and Naive Bayes to classifiy pessismistic respondents. We then used the `test_a_model` function to evaluate the accuracy of these models on the `train` and `validate` datasets. 

<a name='feature_importance'></a>
## Feature Importance
> - Of the models mentioned above, our best performing model was the Random Forest Classifier with depth 8, min samples leaf 3. We utilized this model to perform feature importance on the features in our dataset. We found that public education and U.S. economics are major drivers of pessimism. 

![feature_importance_plot](/images/american_attitudes/feature_importance.jpeg)

<a name='top'></a>
## Modeling with just the top features
> - Feature importances gave us a ranked order of the features by importance in predicting pessimism. Using these ordered features, we ran a series of Random Forest Classifier models using just the top thirty most important features and just the forty most important features, using varying parameters. None of these models, however, outperformed the the Random Forest Classifier with depth 8, min samples leaf 3 using all features. 

<a name='model_comparison'></a>
## Model Comparison
> - Our best performing model was the Random Forest Classifier which included all features and had min samples leaf 3 and a depth of 8. This model had an accuracy of 80.46% on the validate dataset.

![model_comparison](/images/american_attitudes/model_comparison.jpeg)

<a name='modeling_gender'></a>
## Modeling the Gender Subset
> - We ran Random Forest Classification models on the subsets of female and male respondents. 

| Most Important Issues For Women | Most Important Issues for Men |
|---------------------------------|-------------------------------|
| ![females](/images/american_attitudes/females.jpeg) | ![males](/images/american_attitudes/males.jpeg)   |

<a name='modeling_politics'></a>
## Modeling the Political Party Subsets
> - We ran Random Forest Classification models on the subsets of Republican and Democrat respondents. 

| Most Important Issues For Republicans   | Most Important Issues for Democrats |
|-----------------------------------------|-------------------------------------|
| ![Republicans](/images/american_attitudes/republicans.jpeg) | ![Democrats](/images/american_attitudes/democrats.jpeg) |

<a name='modeling_income_level'></a>
## Modeling the Income Level Subsets 
> - We ran Random Forest Classification models on on the subsets for income groups less than \$30,000, between \$30,000 and \$75,000, and more than \$75,000.

| Most Important Issues For Lower Income Level | Most Important Issues for Middle Income Level | Most Important Issues for Upper Income Level |
|----------------------------------------------|-----------------------------------------------|----------------------------------------------|
| ![lower](/images/american_attitudes/lower_income_group.jpeg)     | ![middle](/images/american_attitudes/middle_income_group.jpeg)    | ![higher](/images/american_attitudes/upper_income_group.jpeg)    |

<a name='modeling_education_level'></a>
## Modeling the Education Level Subsets
> - We ran Random Forest Classification models on the subsets for the respondents' highest education level, grouped by: high school or less, some college, or college graduate and above. 

| Most Important Issues For Highest Education High School or Less | Most Important Issues For Highest Education Some College | Most Important Issues For Highest Education College Degree |
|-----------------------------------------------------------------|----------------------------------------------------------|------------------------------------------------------------|
| ![high_school](/images/american_attitudes/education_high_school_or_less.jpeg)       | ![middle](/images/american_attitudes/middle_income_group.jpeg)               | ![higher](/images/american_attitudes/education_college_graduate.jpeg)          |

<a name='out_of_sample'></a>
## Out of Sample
> - We ran our best performing model, selected above on the out-of-sample test dataset. We achieved a 76.54% accuracy. 

<a name='modeling_takeaways'></a>

## Modeling Takeaways

> - Big drivers of pessimism are public education and economics
> - Some other main drivers are job benefits and job security, race relations, standards of living, healthcare, and the country's world status are also very important to adults
> - We chose the most common result of the target column as our baseline with an accuracy of 55.75%.
> - We ran over 200 variations of Decision Tree, Random Forest, K-Nearest Neighbor, and other models
> - Overall, the model with the best performances was the Random Forest with 
>    - `max_depth` = 8
>    - `min_samples_leaf` = 3
> - Accuracy:
>    - `train` (In-sample) = 92.05%
>    - `validate` (Out-of-sample) = 80.46%
>    - `test` (Out-of-sample) = 76.54%
  
<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">

<a name='delivery'></a>
# Project Delivery
✓ _Plan_ ➜ ✓ _Acquire_ ➜ ✓ _Prepare_ ➜ ✓ _Explore_ ➜ ✓ _Model_ ➜ 🟢 **Deliver**

> - Currently we are achieving an Out-of-sample accuracy of ~76% on our `test` data and we believe with further feature engineering and hyper-parameter optimization we could achieve a higher accuracy. 

<a name='conclusion_and_next_steps'></a>

## Conclusion and Next Steps
> - While it appeared that there may have been a significant difference between the genders and their pessimisim, it was not result in this instance. 
> - Additionally, our other potential observation, that there would be a significant difference in the pessimisim reletive to income, it was again not the result in this instance.
> - The next step is to continue finalizing the work and ensuring our work is throughly documented.
> - With more time we will continue examining multiple different feature combinations and test for significance from these observations.

<a name='replication'></a>
## Project Replication
> - Statistical data can be downloaded from <a href="https://www.kaggle.com/shankanater/american-trends-panel-pewresearch/download">here</a>.
> - You can read the SPSS Statistic data file with `pandas.read_spss("ATP W41.sav")`

<a name='data_use'></a>
## Data Use Agreements
> - The source of the data with express reference to the center in accordance with the following citation: “Pew Research Center’s American Trends Panel”
> - Any hypothesis, insight and or result within this project in no way implies or suggests as attributing a particular policy or lobbying objective or opinion to the Center, and
> - “The opinions expressed herein, including any implications for policy, are those of the author and not of Pew Research Center.”
> - Information on The American Trends Panel (ATP) can be found at <a href="https://www.pewresearch.org/our-methods/u-s-surveys/the-american-trends-panel/" target="_blank">The American Trends Panel</a>
> - More information on these user agreements can be found at <a href="https://www.pewresearch.org/about/terms-and-conditions/" target="_blank">Pew Research</a>.

<div style="text-align: right"><a href='#toc'>Table of Contents</a></div>
<hr style="border-top: 10px groove tan; margin-top: 1px; margin-bottom: 1px">

---
**Citation**

> - <a href="https://www.pewresearch.org/social-trends/dataset/american-trends-panel-wave-41/">"American Trends Panel Wave 41.”</a> Pew Research Center, Washington, D.C. (December 27, 2018).