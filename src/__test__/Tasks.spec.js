import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Tasks } from '../components/Tasks';
import { useSelectedProjectValue } from '../context';

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: '🙌 THE OFFICE',
        projectId: '1',
        userId: 'RmcjIDc2ItdG9wB',
        docId: 'somya-singhal',
      },
      {
        name: '🚀 DAILY',
        projectId: '2',
        userId: 'RmcjIDc2ItdG9wB',
        docId: 'daily-office',
      },
      {
        name: '🎯 FUTURE',
        projectId: '3',
        userId: 'RmcjIDc2ItdG9wB',
        docId: 'wake-up',
      },
      {
        name: '📚 WORDS',
        projectId: '4',
        userId: 'RmcjIDc2ItdG9wB',
        docId: 'arcade-fire',
      },
      {
        name: '🎵 MUSIC',
        projectId: '5',
        userId: 'RmcjIDc2ItdG9wB',
        docId: 'bella-ciao',
      },
    ],
  })),
}));

jest.mock('../hooks', () => ({
  useTasks: () => ({
    tasks: [
      {
        archived: false,
        date: "23/10/2021",
        projectId: "1",
        task: "Complete this assignment within a week",
        userId: "RmcjIDc2ItdG9wB",
      },
    ],
  }),
}));

beforeEach(cleanup);

describe('<Tasks />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders tasks', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX',
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Inbox');
  });

  it('renders a task with a project title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => '1'),
      selectedProject: '1',
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('🙌 THE OFFICE');
  });

  it('renders a task with a collated title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX',
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Inbox');
  });
});