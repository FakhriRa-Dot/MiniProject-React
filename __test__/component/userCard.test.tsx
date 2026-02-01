import { render, screen, fireEvent } from "@testing-library/react";
import { User } from "@/types/user";
import UserCard from "@/components/userCard";

describe("UserCard", () => {
  const mockUser: User = {
    id: 1,
    email: "john.doe@mail.com",
    first_name: "John",
    last_name: "Doe",
    avatar: "https://example.com/avatar.jpg",
  };

  it("renders user information", () => {
    render(<UserCard user={mockUser} onDetail={jest.fn()} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@mail.com")).toBeInTheDocument();

    const image = screen.getByAltText("John");
    expect(image).toHaveAttribute("src", mockUser.avatar);
  });

  it("calls onDetail with user id when Detail button is clicked", () => {
    const onDetailMock = jest.fn();

    render(<UserCard user={mockUser} onDetail={onDetailMock} />);

    fireEvent.click(screen.getByText("Detail"));

    expect(onDetailMock).toHaveBeenCalledWith(1);
  });
});
