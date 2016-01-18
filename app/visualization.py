
'''
NoI visualization 

data visualization model
'''
from app import LEVELS
from app.models import db, User, UserSkill
from app import LEVELS


import numpy as np
import matplotlib
matplotlib.rcParams['interactive'] == True
import matplotlib.pyplot as plt
from collections import Counter


def viewUserSkills():
	
	user = db.session.query(User)[0]
	s = db.session.query(UserSkill).filter(UserSkill.user_id == user.id)
	skills = []
	level = []
	for skill in s:
		skills.append(skill.name)
		level.append(skill.level)

	plt.bar(range(4), Counter(level).values(),align='center')
	plt.xticks(range(4),('Connect','Do','Explain','Learn'))
	plt.savefig("/noi/png/skill-level.png")

def viewUserMatches():

	user = db.session.query(User)[0]
	matches = user.match(LEVELS['LEVEL_I_WANT_TO_LEARN']['score'])
	for match in matches:
		print match.name